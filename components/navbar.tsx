import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f5f1e8] border-b border-black/5">
      <div className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto w-full relative">
          <div className="flex gap-8 text-sm font-medium text-[#4a4a4a]">
            <Link href="#home" className="text-black border-b border-black pb-0.5 transition-all uppercase tracking-widest text-[11px]">
              Home
            </Link>
            <Link href="#gallery" className="hover:text-black transition-colors uppercase tracking-widest text-[11px]">
              Gallery
            </Link>
              <Link href="/contact" className="hover:text-black transition-colors uppercase tracking-widest text-[11px]">
                Contact
              </Link>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-4xl font-normal tracking-[0.2em] text-[#a67c52] uppercase">Artelio</span>
          </div>

          <Button
            variant="outline"
            className="rounded-full border-black/20 text-black hover:bg-black hover:text-white px-10 py-5 bg-transparent transition-all text-xs uppercase tracking-widest"
          >
            Appointment
          </Button>
      </div>
    </nav>
  )
}
