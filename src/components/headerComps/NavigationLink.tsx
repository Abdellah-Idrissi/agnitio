'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({link}: {link:string}) {
  const pathname = usePathname()

  return (
    <Link href={`/${link !== 'Home' ? link : ''}`} key={link} className={` text-[15px] hover:text-neutral-800 hover:underline underline-offset-2 

    ${ (pathname.includes(link.toLowerCase()) || (pathname === '/' && link === 'Home')) ? 'text-neutral-800 underline' : 'text-neutral-600' }

    `}>{link}</Link>
  )
}
