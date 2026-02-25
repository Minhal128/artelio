import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-background pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Banner Card */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[4rem] overflow-hidden mb-12 md:mb-24 shadow-2xl">
          <Image src="/abstract-tea-cup-on-balcony-painting.jpg" alt="Art banner" fill className="object-cover" />
            <div className="absolute inset-4 sm:inset-6 md:right-12 md:top-1/2 md:-translate-y-1/2 md:inset-y-auto md:left-auto bg-[#fdfaf3]/95 backdrop-blur-md p-6 sm:p-8 md:p-14 rounded-[2rem] md:rounded-[3.5rem] md:max-w-xl shadow-2xl border border-white/40">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-[#1a1a1a] leading-tight">Get in Touch</h2>
              <p className="text-muted-foreground mb-6 md:mb-10 text-sm sm:text-base md:text-xl leading-relaxed">
                Have a question or need assistance? Reach out to us using the form below, and we'll get back to you as
                soon as possible.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-7 text-sm sm:text-base md:text-xl shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
                  Submit Inquiry
                </Button>
              </Link>
            </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 pb-12 md:pb-20">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-primary uppercase block mb-4 md:mb-6">
              Artelio
            </span>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm md:text-base">
              We are a premier online art gallery showcasing a curated collection of contemporary and classic art. Our
              mission is to inspire and connect art lovers with unique, captivating pieces from talented artists around
              the world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 md:mb-6 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 md:mb-6 text-sm md:text-base">Information</h3>
            <ul className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 md:mb-6 text-sm md:text-base">Connect with Us</h3>
            <ul className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
              <li className="flex items-center gap-2">
                <Link href="#" className="hover:text-primary flex items-center gap-2 transition-colors">
                  Instagram
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="#" className="hover:text-primary flex items-center gap-2 transition-colors">
                  Facebook
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="#" className="hover:text-primary flex items-center gap-2 transition-colors">
                  Twitter
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="#" className="hover:text-primary flex items-center gap-2 transition-colors">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Address Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-10 border-t border-primary/10 gap-6 md:gap-8">
          {/* Mobile: Stack vertically, Desktop: Horizontal layout */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-muted-foreground md:ml-auto w-full md:w-auto">
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                123 Art Street, Suite 100
                <br />
                New York, NY 10001 USA
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (212) 555-1234</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="w-4 h-4 text-primary" />
              <span>contact@yourartgallery.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
