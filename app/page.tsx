import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Collections } from "@/components/collections"
import { Pricing } from "@/components/pricing"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Collections />
      <Pricing />
      <Footer />
    </main>
  )
}
