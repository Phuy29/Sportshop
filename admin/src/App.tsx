import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { AppRoutes } from './routes'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  )
}

export default App
