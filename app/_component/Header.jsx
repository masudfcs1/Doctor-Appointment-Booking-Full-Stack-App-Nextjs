import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const menu=[
        {
            id: 1,
            name:"Home",
            path:'/',
        },
        {
            id: 2,
            name:"Explore",
            path:'/explore',
        },
        {
            id: 3,
            name:"Contact Us",
            path:'/',
        },
    ]
  return (
    <div className=' flex items-center justify-between p-4  shadow-md'>
        <div className='flex items-center gap-10'>
        <Link href='/'>
        <Image
        src='/logo.svg'
        alt='logo'
        width={180}
        height={80}
        className=' w-16 cursor-pointer'
        />
        </Link>
        <ul className='md:flex gap-8 hidden'>
            {menu.map((item,index)=>(
                <Link href={item?.path}>
                <li key={index} className='cursor-pointer hover:text-[#13eb74] hover:scale-105 ease-in-out transition-all '>{item?.name}</li>
                </Link>
            ))}
        </ul>
        </div>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header