import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import { Toaster } from 'sonner'
import '@/styles/globals.css'
import SessionProvider from '@/contexts/SessionProvider'
// import {SiteProvider} from '@/contexts/SiteContext'

export const metadata = {
  title: {
    // absolute: "",
    default: "Turbo AI Solution",
    template: "%s | Turbo AI Solution",
  },
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <SessionProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
        <Toaster
          closeButton
          richColors
        />
      </body>
    </html>
  )
}
