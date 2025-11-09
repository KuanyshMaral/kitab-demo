# Kitab - Book E-Commerce Platform

Kitab is a modern, full-stack e-commerce platform for buying and selling books. The name "Kitab" means "book" in Arabic, Urdu, and several other languages, reflecting a global and inclusive appeal.

## Features

### User Authentication
- Email/password registration with email confirmation
- Secure login system using Supabase Auth
- User profiles with account information
- Persistent sessions across browser sessions

### Book Catalog
- Browse extensive book collection with beautiful UI
- Advanced filtering by genre, price range, and search
- Featured books carousel on homepage
- Detailed book pages with ratings and descriptions

### User Experience
- Responsive design for all devices
- Modern, clean interface with warm, book-friendly colors
- Fast page loads and smooth transitions
- Accessible components following best practices

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety

## Database Schema

### Tables

#### books
- id (UUID, Primary Key)
- title (TEXT)
- author (TEXT)
- genre (TEXT)
- price (DECIMAL)
- description (TEXT)
- image_url (TEXT)
- stock (INTEGER)
- rating (DECIMAL)
- featured (BOOLEAN)
- created_at (TIMESTAMP)

#### profiles
- id (UUID, Primary Key, FK to auth.users)
- email (TEXT)
- full_name (TEXT)
- avatar_url (TEXT)
- is_seller (BOOLEAN)
- created_at (TIMESTAMP)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase project set up

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables (already configured in v0)

4. Run the database migrations by executing the SQL scripts in order:
   - 001_create_books_table.sql
   - 002_create_profiles_table.sql
   - 003_seed_books.sql

5. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Security

- Row Level Security (RLS) enabled on all tables
- User data protected with proper authentication checks
- Secure password handling via Supabase Auth
- Email confirmation required for new accounts

## Future Enhancements

- Shopping cart functionality
- Order management system
- Payment integration (Stripe)
- User reviews and ratings
- Seller dashboard
- Wishlist feature
- Advanced search with filters
- Book recommendations

## License

This is a demo project created for educational purposes.
