import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import Providers from './Providers';


export const metadata = {
  title: "GPT-Genius",
  description: "An AI integrated website , Your AI language companion ",
};

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
    <html lang="en" >
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
 
