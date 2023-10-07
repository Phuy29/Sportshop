import { Navigate, Outlet } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Dashboard from '../components/pages/Dashboard'
import ProductPage from '../components/pages/ProductPage'

const App = () => {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export const protectedRoutes = [
  {
    path: '/admin',
    element: <MainLayout />,
    children:
     [
      {index: true, element: <Navigate to = "dashboard"/>},
      { path: 'dashboard', element: <Dashboard/> },
      {path: 'products' , element: <ProductPage/>}
    ]
  },
  
]
