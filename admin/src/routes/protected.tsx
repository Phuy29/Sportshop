import { Outlet } from 'react-router-dom'

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
    path: '/app',
    element: <App />,
    children: [{ path: 'products', element: <h1>Product page</h1> }]
  }
]
