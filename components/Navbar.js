"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()
  const showNavbar = ["/", "/generate"].includes(pathname)

  return (
    <>
      {showNavbar && (
        <nav className='bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full p-5 px-7'>
          
          <div className="logo flex gap-20 items-center">
            
            <Link href="/">
              <img 
                src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                className="h-8"
                alt="logo"
              />
            </Link>

            <ul className='flex gap-10'>
              <Link href="/"><li>Template</li></Link>
              <Link href="/"><li>Marketing place</li></Link>
              <Link href="/"><li>Discover</li></Link>
              <Link href="/"><li>Pricing</li></Link>
              <Link href="/"><li>Learn</li></Link>
            </ul>

          </div>  

          <div className='flex gap-3'>
            <button className="login bg-gray-400 p-4 rounded-lg font-bold">Log in</button>
            <button className="signup bg-gray-900 text-white p-4 rounded-full font-bold">Signup free</button>
          </div>

        </nav>
      )}
    </>
  )
}

export default Navbar