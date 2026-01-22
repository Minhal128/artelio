"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar({ showAppointment = true }: { showAppointment?: boolean }) {
  const pathname = usePathname()

    const navLinks = [
      { 
        name: "Home", 
        href: "/", 
        active: pathname === "/" 
      },
      { 
        name: "Gallery", 
        href: "/gallery", 
        active: pathname === "/gallery" 
      },
      { 
        name: "Contact", 
        href: "/contact", 
        active: pathname === "/contact" 
      },
    ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f5f1e8] border-b border-black/5">
      <div className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto w-full relative">
        <div className="flex gap-8 text-sm font-medium text-[#4a4a4a]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-all uppercase tracking-widest text-[11px]",
                link.active
                  ? "text-black border-b border-black pb-0.5"
                  : "hover:text-black transition-colors"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <span className="font-serif text-4xl font-normal tracking-[0.2em] text-[#a67c52] uppercase cursor-pointer">Artelio</span>
          </Link>
        </div>

        {showAppointment && (
          <Button
            variant="outline"
            className="rounded-full border-black/20 text-black hover:bg-black hover:text-white px-10 py-5 bg-transparent transition-all text-xs uppercase tracking-widest"
          >
            Appointment
          </Button>
        )}
      </div>
    </nav>
  )
}
