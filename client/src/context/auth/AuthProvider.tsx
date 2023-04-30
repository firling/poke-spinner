import {
    FC,
    useState,
    useEffect,
    createContext,
    useContext,
    useRef,
    Dispatch,
    SetStateAction,
    PropsWithChildren,
  } from 'react'
  import * as authHelper from './AuthHelpers'
import { getUserByToken } from '../../api/auth'
import { IUser } from '../../@types/auth'
  
  type AuthContextProps = {
    token: string | undefined
    saveAuth: (auth: string | undefined) => void
    currentUser: IUser | undefined
    setCurrentUser: Dispatch<SetStateAction<IUser | undefined>>
    logout: () => void
  }
  
  const initAuthContextPropsState = {
    token: authHelper.getAuth(),
    saveAuth: () => {},
    currentUser: undefined,
    setCurrentUser: () => {},
    logout: () => {},
  }
  
  const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)
  
  const useAuth = () => {
    return useContext(AuthContext)
  }
  
  const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const [token, setToken] = useState<string | undefined>(authHelper.getAuth())
    const [currentUser, setCurrentUser] = useState<IUser | undefined>()
    const saveAuth = (auth: string | undefined) => {
      setToken(auth)
      if (auth) {
        authHelper.setAuth(auth)
      } else {
        authHelper.removeAuth()
      }
    }
  
    const logout = () => {
      saveAuth(undefined)
      setCurrentUser(undefined)
    }
  
    return (
      <AuthContext.Provider value={{token, saveAuth, currentUser, setCurrentUser, logout}}>
        {children}
      </AuthContext.Provider>
    )
  }
  
  const AuthInit: FC<PropsWithChildren> = ({children}) => {
    const {token, logout, setCurrentUser} = useAuth()
    const didRequest = useRef(false)
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
    useEffect(() => {
      const requestUser = async (apiToken: string) => {
        try {
          if (!didRequest.current) {
            const {data} = await getUserByToken()
            if (data) {
              setCurrentUser(data)
            }
          }
        } catch (error) {
          console.error(error)
          if (!didRequest.current) {
            logout()
          }
        } finally {
          setShowSplashScreen(false)
        }
  
        return () => (didRequest.current = true)
      }
  
      if (token) {
        requestUser(token)
      } else {
        logout()
        setShowSplashScreen(false)
      }
      // eslint-disable-next-line
    }, [])

    return <>
      {showSplashScreen ? "loading" : children}
    </>
  }
  
  export {AuthProvider, AuthInit, useAuth}
  