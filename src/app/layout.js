import Header from "./components/header";
import "./globals.css";
import { Jost } from "next/font/google";
import { usePathname } from "next/navigation";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata = {
  title: "John Xu - Portfolio",
  icons: {
    icon: "/static/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
