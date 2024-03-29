'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { links } from "./Header";
import { useState } from "react";
import NavigationLink from "./NavigationLink";


export default function MenuSheet() {
  
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <AlignJustify />
      </SheetTrigger>

      <SheetContent side={"left"} className="!max-w-[280px]">
        <div className="flex justify-between items-center gap-x-5 border-b pb-5">
          <Image
            src={logo}
            alt="agnitio logo"
            quality={80}
            className="size-7"
          />

          <SheetClose>
            <X className="hover:text-neutral-800/90" />
          </SheetClose>
        </div>

        <div className="mt-12  flex flex-col gap-y-6 justify-center text-center  ">
          {links.map((link) => ( 
            <NavigationLink key={link} link={link} setOpen={setOpen} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
