"use client"

import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/ui/button';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
       {/* Navigation */}
       <header className="fixed top-0 px-6 z-50 w-full bg-white/60 backdrop-blur">
           <div className="w-full md:w-[90vw] lg:w-[80vw] md:flex  md:justify-center md:items-center mx-auto">
        <div className="container flex h-16 w-full items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Areva
          </Link>
          
          <button
            className="md:hidden mt-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`${
            isMenuOpen
              ? "absolute left-0 top-16 w-full bg-background p-4 md:static shadow-xl md:shadow-none bg-white md:w-auto md:bg-transparent md:p-0"
              : "hidden md:block"
          }`}>
            <ul className="flex flex-col gap-4 md:flex-row md:items-center">
              <li><Link href="/home" className="hover:text-primary hover:underline duration-500">HOME</Link></li>
              <li><Link href="/room" className="hover:text-primary hover:underline duration-500">ROOM</Link></li>
              <li><Link href="/about" className="hover:text-primary hover:underline duration-500">ABOUT</Link></li>
              <li><Link href="/blog" className="hover:text-primary hover:underline duration-500" >BLOG</Link></li>
              <li><Link href="/contact" className="hover:text-primary hover:underline duration-500">CONTACT</Link></li>
              <li><Link href="/book-now"><Button size="sm" className='bg-black p-3 px-4 border hover:text-black border-black text-white rounded-xl duration-500'>BOOK NOW</Button></Link></li>
            </ul>
          </nav>
        </div>
               </div>
      </header>
    </div>
  )
}

export default Header
