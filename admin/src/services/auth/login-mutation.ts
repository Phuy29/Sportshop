import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export interface LoginBody {
  email: string
  password: string
}

interface Response {
  message: string
  token: string
}

const loginApi = async (body: LoginBody): Promise<Response> => {
  const res = await axios.post('http://localhost:8080/admin/auth/sign-in', body)

  return res.data
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginApi
  })
}
