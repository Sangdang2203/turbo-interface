import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "theme";
import { Metadata } from "next";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import SpeedDial from "@/components/SpeedDial";

export const metadata: Metadata = {
  title: "Turbo AI Solution",
  description:
    "More than 10 years of experience, Turbo Solutions specializes in providing leading cloud computing solutions and applications in Vietnam.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <header>
          <TheHeader />
        </header>

        <div className="background-body"> {children} </div>

        <footer>
          <TheFooter />
          <SpeedDial />
        </footer>
      </body>
    </html>
  );
}
