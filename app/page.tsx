import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Collections } from "@/components/collections"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Collections />
      <Footer />
    </main>
  )
}
