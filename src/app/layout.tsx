import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '../components/Navbar'

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

        <div className="flex flex-col w-3/4 mx-auto h-screen">
          <header className="flex rounded-xl justify-end bg-gray-200 p-5">
            <div className="font-bold text-2xl mr-auto">Felipe Obregon</div>
            <Navbar />
          </header>


          <main className="flex-grow p-5">
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}
