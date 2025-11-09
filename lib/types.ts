export interface Book {
  id: string
  title: string
  author: string
  genre: string
  price: number
  description: string | null
  image_url: string | null
  stock: number
  rating: number
  featured: boolean
  created_at: string
}

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  is_seller: boolean
  created_at: string
}
