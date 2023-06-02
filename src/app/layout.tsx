import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex flex-col w-1/3 mx-auto h-screen">
          <header className="bg-gray-200 p-5">
            Felipe Obregon
          </header>
          <Navbar />

          <main className="flex-grow p-5">
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}
