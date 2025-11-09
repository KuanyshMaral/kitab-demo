import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Package, Shield } from "lucide-react"
import { notFound } from "next/navigation"

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const { data: book } = await supabase.from("books").select("*").eq("id", id).single()

  if (!book) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Book Image */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted">
              <img src={book.image_url || "/placeholder.svg"} alt={book.title} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              {book.featured && <Badge className="mb-2">Featured</Badge>}
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{book.author}</p>
              <div className="flex items-center gap-4">
                <Badge variant="outline">{book.genre}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{book.rating}</span>
                  <span className="text-muted-foreground">/5</span>
                </div>
              </div>
            </div>

            <div className="border-y py-6">
              <div className="text-3xl font-bold text-primary mb-2">${book.price.toFixed(2)}</div>
              <p className="text-sm text-muted-foreground">
                {book.stock > 0 ? (
                  <span className="text-green-600 font-medium">In Stock ({book.stock} available)</span>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </p>
            </div>

            <div className="space-y-3">
              <Button size="lg" className="w-full gap-2" disabled={book.stock === 0}>
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="w-full bg-transparent">
                Add to Wishlist
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Fast Delivery</h3>
                    <p className="text-sm text-muted-foreground">Get your book delivered within 3-5 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Secure Payment</h3>
                    <p className="text-sm text-muted-foreground">Your payment information is safe and encrypted</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {book.description && (
              <div>
                <h2 className="text-2xl font-bold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
