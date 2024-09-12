import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModalContextProvider } from "./store/modalContext.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./store/theme-provider.tsx";
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
