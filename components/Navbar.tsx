"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'



const Navbar = () => {
  return (
    <nav className='flex-between flex flex-row  w-full border-b-2
     px-6 py-4 lg:px-10 sticky'>
      <Link href="/dashboard" className='flex flex-grow items-center gap-1'>
        <Image
          src="/reshot-icon-deep-learning-ZXD4AGCNSH.svg"
          width={45}
          height={30}
          alt="Logo"
          className="max-sm:size-10"
        />
        <p className='text-[27px] font-bold text-red max-sm:hidden'>Gem</p>
      </Link>

      <div className='flex flex-row flex-between gap-5 w-[150px]'>
        {/* Clerk-User Management if needed*/}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <ModeToggle/>
        <Link href="/sign-in">
          <Button>   
            Sign Out
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar