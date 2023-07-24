"use client"
import Footer from './components/Footer'
import Nav from './components/Nav'
import './globals.css'


export const metadata = {
  title: 'Travlog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

          <div className=" DIV1 relative w-full  text-left font-nunito-sans  ">
        <main>
            <div className=" DIV2 absolute top-[-223px] overflow-hidden left-[-356px] rounded-[50%] bg-orangered [filter:blur(500px)] w-[400px] h-[400px] opacity-[0.9]" />
          <Nav />          
        {children}
        <Footer className="absolute bottom-0 left-0 w-full"/>
        </main>
          </div>
        </body>
    </html>
  )
}
