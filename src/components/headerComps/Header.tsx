import Image from "next/image";
import logo from "../../../public/logo.png"
import Link from "next/link";
import MenuSheet from "./MenuSheet";
import NavigationLink from "./NavigationLink";

export const links = ["Home", "Positions", "Create"]

export default function Header() {
  return (
    <header className="border-b">
      <div className="cnt">
        <div className="flex justify-between items-center gap-x-5 py-3 md:py-4 ">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="agnitio logo"
              quality={80}
              className="size-8"
            />
          </Link>

          <MenuSheet />

          <div className="hidden md:flex gap-x-7 ">
            {links.map((link) => (
              <NavigationLink key={link} link={link} />
            ))}
          </div>

        </div>
      </div>
    </header>
  )
}
