import { Sidebar } from './components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS Dashboard',
  description: 'Dashboard created with nextjs',
}

export default function RootLayout({ children }) {
  return (
   
      <html>
      <body className={inter.className}>{children}
      </body>
      </html>
 
  )
}
