import * as React from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { queryClient } from '@/client'
import { router } from '@/router'

import '@/styles.css'

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container!)
const app = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)

root.render(app)
