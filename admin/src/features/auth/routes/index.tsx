import { Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<h1>Login page</h1>} />
      <Route path='register' element={<h1>Register page</h1>} />
    </Routes>
  )
}
