import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-5">
      <div className="cnt">
        <div className="flex justify-between items-center gap-x-5">
          <p className="text-xs">&copy; 2023 Agnitio. All rights reserved. </p>

          <div className="flex gap-x-4 5m:gap-x-5 md:gap-x-6 items-center">
            <Instagram size={13} strokeWidth={2} className="cursor-pointer" />
            <Facebook size={13} strokeWidth={2} className="cursor-pointer" />
            <Twitter size={13} strokeWidth={2} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
