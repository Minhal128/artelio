import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="flex gap-8 text-sm font-medium text-muted-foreground">
        <Link href="#" className="text-foreground border-b-2 border-primary pb-0.5">
          Home
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          about
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          Shop
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          Stores
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          Blog
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <span className="font-serif text-3xl font-bold tracking-widest text-primary uppercase">Artelio</span>
      </div>

      <Button
        variant="outline"
        className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white px-8 bg-transparent"
      >
        Login
      </Button>
    </nav>
  )
}
