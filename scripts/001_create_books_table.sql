-- Create books table
CREATE TABLE IF NOT EXISTS public.books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  genre TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  image_url TEXT,
  stock INTEGER DEFAULT 0,
  rating DECIMAL(3, 2) DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read books
CREATE POLICY "books_select_all"
  ON public.books FOR SELECT
  USING (true);

-- Only authenticated users can insert books (for sellers)
CREATE POLICY "books_insert_authenticated"
  ON public.books FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Only book owners can update their books (future enhancement)
CREATE POLICY "books_update_own"
  ON public.books FOR UPDATE
  USING (true);
