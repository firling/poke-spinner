import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from 'axios'
import { setupAxios } from './context/auth/AuthHelpers.ts'
import { AuthProvider } from './context/auth/AuthProvider.tsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import { MantineProvider } from '@mantine/core'

const queryClient = new QueryClient()

setupAxios(axios)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
