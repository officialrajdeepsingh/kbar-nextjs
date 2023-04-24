import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from "@/components/Layout"
import { Toaster } from "react-hot-toast";
import { Header } from '@/components/Header';
export default function App({ Component, pageProps }: AppProps) {

  return (<ThemeProvider attribute="class">
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
    <Toaster
      toastOptions={{
        position: "bottom-right",
      }}
    />
  </ThemeProvider>)
}
