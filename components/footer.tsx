import Link from "next/link"
import { BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Kitab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your gateway to endless stories and knowledge. Discover, buy, and sell books from around the world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog?genre=Fiction" className="text-muted-foreground hover:text-foreground">
                  Fiction
                </Link>
              </li>
              <li>
                <Link href="/catalog?genre=Fantasy" className="text-muted-foreground hover:text-foreground">
                  Fantasy
                </Link>
              </li>
              <li>
                <Link href="/catalog?genre=Mystery" className="text-muted-foreground hover:text-foreground">
                  Mystery
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-muted-foreground hover:text-foreground">
                  All Books
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Kitab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
