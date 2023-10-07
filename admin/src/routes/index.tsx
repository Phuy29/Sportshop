import { useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const AppRoutes = () => {
  const isAuth = false

  const commonRoutes = [{ path: '/', element: <div>Landing page</div> }]

  const routes = isAuth ? protectedRoutes : publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
