import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from 'axios'
import { setupAxios } from './context/auth/AuthHelpers.ts'
import { AuthProvider } from './context/auth/AuthProvider.tsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import { MantineProvider } from '@mantine/core'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'react-tooltip/dist/react-tooltip.css'

const queryClient = new QueryClient()

setupAxios(axios)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
)
