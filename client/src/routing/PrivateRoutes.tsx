import {Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import { Trainer } from '../pages/Trainer'

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/' />} />
        {/* Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/trainer' element={<Trainer />} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
