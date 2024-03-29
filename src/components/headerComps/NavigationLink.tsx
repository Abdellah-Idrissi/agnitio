'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type propsType = {
  link:string
  setOpen?:Dispatch<SetStateAction<boolean>>
}

export default function NavigationLink({link,setOpen}: propsType) {
  const pathname = usePathname()

  const closeMenu = ()=> {
    setOpen && setOpen(false)
  }

  return (
    <Link href={`/${link !== 'Home' ? link.toLowerCase() : ''}`} onClick={closeMenu} key={link} className={` text-[15px] hover:text-neutral-800 hover:underline underline-offset-2 

    ${ (pathname.includes(link.toLowerCase()) || (pathname === '/' && link === 'Home')) ? 'text-neutral-800 underline' : 'text-neutral-600' }

    `}>{link}</Link>
  )
}
