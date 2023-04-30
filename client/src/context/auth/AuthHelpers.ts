
const AUTH_LOCAL_STORAGE_KEY = 'auth_token'
const getAuth = (): string | undefined => {
  if (!localStorage) {
    return
  }

  const token: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!token) {
    return
  }

  return token;
}

const setAuth = (token: string) => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, token)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: {headers: {Authorization: string}}) => {
      const token = getAuth()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
}

export {getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY}
