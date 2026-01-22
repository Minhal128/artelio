import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-background pt-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Banner Card */}
        <div className="relative w-full h-[450px] rounded-[4rem] overflow-hidden mb-24 shadow-2xl">
          <Image src="/abstract-tea-cup-on-balcony-painting.jpg" alt="Art banner" fill className="object-cover" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-[#fdfaf3]/95 backdrop-blur-md p-14 rounded-[3.5rem] max-w-xl shadow-2xl border border-white/40">
              <h2 className="font-serif text-5xl font-bold mb-6 text-[#1a1a1a] leading-tight">Get in Touch</h2>
              <p className="text-muted-foreground mb-10 text-xl leading-relaxed">
                Have a question or need assistance? Reach out to us using the form below, and we'll get back to you as
                soon as possible.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-xl shadow-lg transition-transform hover:scale-105">
                  Submit Inquiry
                </Button>
              </Link>
            </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-20">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-3xl font-bold tracking-widest text-primary uppercase block mb-6">
              Artelio
            </span>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              We are a premier online art gallery showcasing a curated collection of contemporary and classic art. Our
              mission is to inspire and connect art lovers with unique, captivating pieces from talented artists around
              the world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-muted-foreground">
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
            <h3 className="font-semibold mb-6">Information</h3>
            <ul className="space-y-4 text-muted-foreground">
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
            <h3 className="font-semibold mb-6">Connect with Us</h3>
            <ul className="space-y-4 text-muted-foreground">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-t border-primary/10 gap-8">
          {/* v0: Adjusted address layout to match image */}
          <div className="flex gap-12 text-sm text-muted-foreground ml-auto">
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
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
