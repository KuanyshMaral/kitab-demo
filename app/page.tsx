import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookCarousel } from "@/components/book-carousel"
import { Button } from "@/components/ui/button"
import type { Book } from "@/lib/types"
import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Truck } from "lucide-react"

export default async function HomePage() {
  const supabase = await createClient()

  const { data: books } = await supabase.from("books").select("*").order("created_at", { ascending: false })

  const featuredBooks = books?.filter((book: Book) => book.featured) || []
  const allBooks = books || []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-muted/20 border-b">
          <div className="container py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Your Gateway to Endless Stories
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Discover, buy, and sell books from around the world. Join thousands of book lovers in the Kitab
                community.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/catalog">
                  <Button size="lg" className="gap-2">
                    Browse Catalog <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button size="lg" variant="outline">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Carousel */}
        <section className="container py-16">
          <BookCarousel books={featuredBooks} title="Featured Books" />
        </section>

        {/* All Books Carousel */}
        <section className="container py-16">
          <BookCarousel books={allBooks} title="New Arrivals" />
        </section>

        {/* Features Section */}
        <section className="bg-muted/40 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kitab?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Vast Collection</h3>
                <p className="text-muted-foreground">
                  Thousands of books across all genres, from classics to contemporary bestsellers.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Your data and transactions are protected with enterprise-grade security.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Get your books delivered quickly with our reliable shipping partners.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
