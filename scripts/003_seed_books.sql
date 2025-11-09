-- Insert sample books
INSERT INTO public.books (title, author, genre, price, description, image_url, stock, rating, featured) VALUES
('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 'Fantasy', 24.99, 'The first book in the Harry Potter series follows young wizard Harry Potter as he begins his magical education at Hogwarts School.', '/harry-potter-sorcerer-stone-book-cover.jpg', 50, 4.9, true),
('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 'Fantasy', 24.99, 'Harry''s second year at Hogwarts is fraught with danger as the Chamber of Secrets is opened once more.', '/harry-potter-chamber-secrets-book-cover.jpg', 45, 4.8, true),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 15.99, 'A portrait of the Jazz Age in all its decadence and excess, centered around Jay Gatsby''s pursuit of Daisy Buchanan.', '/placeholder.svg?height=400&width=300', 30, 4.7, true),
('To Kill a Mockingbird', 'Harper Lee', 'Classic', 18.99, 'A gripping tale of racial injustice and childhood innocence in the Depression-era South.', '/placeholder.svg?height=400&width=300', 25, 4.8, true),
('1984', 'George Orwell', 'Dystopian', 16.99, 'A dystopian social science fiction novel exploring the dangers of totalitarianism.', '/placeholder.svg?height=400&width=300', 40, 4.6, true),
('Pride and Prejudice', 'Jane Austen', 'Romance', 14.99, 'A romantic novel of manners exploring themes of love, reputation, and social class.', '/placeholder.svg?height=400&width=300', 35, 4.7, true),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 22.99, 'The prelude to The Lord of the Rings trilogy, following Bilbo Baggins on an unexpected adventure.', '/placeholder.svg?height=400&width=300', 28, 4.8, false),
('The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 17.99, 'A story about teenage rebellion and alienation narrated by the iconic Holden Caulfield.', '/placeholder.svg?height=400&width=300', 20, 4.5, false),
('The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 35.99, 'The epic fantasy trilogy following the quest to destroy the One Ring.', '/placeholder.svg?height=400&width=300', 15, 4.9, false),
('Animal Farm', 'George Orwell', 'Political Fiction', 13.99, 'An allegorical novella reflecting events leading up to the Russian Revolution.', '/placeholder.svg?height=400&width=300', 32, 4.6, false),
('Brave New World', 'Aldous Huxley', 'Dystopian', 16.99, 'A dystopian novel set in a futuristic World State of genetically modified citizens.', '/placeholder.svg?height=400&width=300', 22, 4.5, false),
('The Da Vinci Code', 'Dan Brown', 'Mystery', 19.99, 'A mystery thriller following symbologist Robert Langdon as he investigates a murder.', '/placeholder.svg?height=400&width=300', 18, 4.4, false),
('The Alchemist', 'Paulo Coelho', 'Fiction', 16.99, 'A philosophical novel about a young shepherd''s journey to find treasure.', '/placeholder.svg?height=400&width=300', 26, 4.7, false),
('The Hunger Games', 'Suzanne Collins', 'Young Adult', 19.99, 'In a dystopian future, Katniss Everdeen volunteers for a televised death match.', '/placeholder.svg?height=400&width=300', 38, 4.6, false),
('Dune', 'Frank Herbert', 'Science Fiction', 21.99, 'A science fiction masterpiece set on the desert planet Arrakis.', '/placeholder.svg?height=400&width=300', 24, 4.8, false)
ON CONFLICT DO NOTHING;
