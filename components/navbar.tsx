"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navbar({ showAppointment = true }: { showAppointment?: boolean }) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f5f1e8] border-b border-black/5">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 max-w-[1400px] mx-auto w-full relative">
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#4a4a4a] hover:text-black transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-sm font-medium text-[#4a4a4a]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-all uppercase tracking-widest text-[10px] lg:text-[11px]",
                link.active
                  ? "text-black border-b border-black pb-0.5"
                  : "hover:text-black transition-colors"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" onClick={closeMenu}>
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.2em] text-[#a67c52] uppercase cursor-pointer">
              Artelio
            </span>
          </Link>
        </div>

        {/* Desktop Appointment Button */}
        {showAppointment && (
          <Button
            variant="outline"
            className="hidden md:inline-flex rounded-full border-black/20 text-black hover:bg-black hover:text-white px-6 lg:px-10 py-3 lg:py-5 bg-transparent transition-all text-xs uppercase tracking-widest"
          >
            Appointment
          </Button>
        )}

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden w-8" />
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f5f1e8] border-b border-black/5 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "block py-2 text-base font-medium uppercase tracking-widest transition-colors",
                  link.active
                    ? "text-black border-l-2 border-black pl-4"
                    : "text-[#4a4a4a] hover:text-black hover:pl-2"
                )}
              >
                {link.name}
              </Link>
            ))}
            {showAppointment && (
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-black/20 text-black hover:bg-black hover:text-white py-3 bg-transparent transition-all text-xs uppercase tracking-widest"
                  onClick={closeMenu}
                >
                  Appointment
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
