import { AuthInit, useAuth } from './context/auth/AuthProvider';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Login } from './pages/auth/Login';
import { PrivateRoutes } from './routing/PrivateRoutes';
import './App.css';

function App() {
  const {currentUser} = useAuth()
  return (
    <AuthInit>
      <BrowserRouter>
        <Routes>
          {/* <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} /> */}
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
            </>
          ) : (
            <>
              <Route path='auth/'>
                <Route path='login' element={<Login />} />
                <Route index element={<Login />} />
              </Route>
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </AuthInit>
  )
}

export default App
