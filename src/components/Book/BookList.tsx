import React from 'react';
import BookItem from './BookItem';

interface Book {
  book_id: number;
  category_name: string;
  title: string;
  author: string;
  description: string;
  condition: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
  book_image: string;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <BookItem key={book.book_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
