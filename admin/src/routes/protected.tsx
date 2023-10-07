import { Navigate } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Dashboard from '../components/pages/Dashboard'
import ProductPage from '../components/pages/ProductPage'

export const protectedRoutes = [
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to='dashboard' /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductPage /> }
    ]
  }
]
