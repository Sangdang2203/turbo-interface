import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "theme";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import "@/styles/themes.css";
import "@/styles/scrollable.css";
import SessionProvider from "contexts/SessionProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbo AI Solution",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scrollable">
        <SessionProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
        <Toaster closeButton richColors />
      </body>
    </html>
  );
}
