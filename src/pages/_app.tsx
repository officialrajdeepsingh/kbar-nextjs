import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from "@/components/Layout"
import { Toaster } from "react-hot-toast";
import { Header } from '@/components/Header';
export default function App({ Component, pageProps }: AppProps) {

  /* This code is the main App component in a Next.js application. It is responsible for
  rendering the layout of the application and providing a theme to the entire app using the
  `ThemeProvider` component from the `next-themes` library. */

  return (
  <ThemeProvider attribute="class">
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
    <Toaster
      toastOptions={{
        position: "bottom-right",
      }}
    />
  </ThemeProvider>
  )
}
