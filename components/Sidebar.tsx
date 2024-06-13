"use client"
import { Icon } from 'lucide-react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
     // Split links into main and bottom links
    const mainLinks = sidebarLinks.slice(0, sidebarLinks.length - 2);
    const bottomLinks = sidebarLinks.slice(sidebarLinks.length - 2);
    return(
        <section className='sticky left-0 top-0 flex h-screen w-fit flex-col
            justify-between p-6 pt-24 max-sm:hidden lg:w-[246px] border-none '>

        
            <div className='flex flex-1 flex-col gap-6'>
                
            {mainLinks.map((link) => {
                const isActive = pathname === link.route //|| pathname.startsWith(link.route);

                return(
                    <Link
                        href={link.route}
                        key={link.label}
                        className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {'bg-secondary': isActive,})}>

                        <link.icon 
                        
                           aria-label={link.label}
                            width={28}
                            height={24}
                            
                        />
                        <p className='text-[15px] font-semibold max-lg:hidden'>
                            {link.label}
                        </p>
                        
                    
                    </Link>
                )      

            })}
            </div>


            <div className='flex flex-col gap-6'>
                {bottomLinks.map((link) => {
                    const isActive = pathname === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', { 'bg-secondary': isActive })}
                        >
                            <link.icon
                                width={28}
                                height={24}
                                aria-label={link.label}
                                
                            />
                            <p className='text-[15px] font-semibold max-lg:hidden'>
                                {link.label}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
  )
}

export default Sidebar