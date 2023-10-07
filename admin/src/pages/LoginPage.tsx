import { Button, Form, Input } from 'antd'
import { useLoginMutation } from '@/services/auth/login-mutation'
import { useNavigate } from 'react-router-dom'

interface FormValues {
  email: string
  password: string
}

const LoginPage = () => {
  const loginMutation = useLoginMutation()

  const navigate = useNavigate()

  const onFinish = (values: FormValues) => {
    loginMutation.mutate(values, {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token)
        navigate('/')
      }
    })
  }

  return (
    <div className='container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-black p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          Sport shop
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
            <p className='text-sm text-muted-foreground'>Enter your email below to create your account</p>
          </div>
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='default' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
