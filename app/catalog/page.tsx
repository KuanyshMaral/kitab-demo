import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CatalogClient } from "@/components/catalog-client"

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ genre?: string; search?: string }>
}) {
  const supabase = await createClient()
  const params = await searchParams

  let query = supabase.from("books").select("*")

  if (params.genre) {
    query = query.eq("genre", params.genre)
  }

  const { data: books } = await query.order("title", { ascending: true })
  const { data: allBooks } = await supabase.from("books").select("genre")

  const genres = Array.from(new Set(allBooks?.map((book) => book.genre) || []))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Book Catalog</h1>
          <p className="text-muted-foreground">Explore our collection of {books?.length || 0} books</p>
        </div>

        <CatalogClient initialBooks={books || []} genres={genres} initialGenre={params.genre} />
      </main>

      <Footer />
    </div>
  )
}
