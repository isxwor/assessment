import { useCallback } from 'react';

import { BookCard } from '../book-card';
import { BookType } from '../../types/book';
import { TrashIcon } from '../icons/trash';

import { useLocalStorage } from '../../hooks/use-local-storage';

export const Bookshelf = () => {
  const [storedValue, setStoredValue] = useLocalStorage<BookType[]>(
    'bookshelf',
    []
  );

  const deleteFromBookshelf = useCallback(
    (key: string) => {
      setStoredValue((prev) => [...prev.filter((book) => book.key !== key)]);
    },
    [setStoredValue]
  );

  return (
    <div className='container'>
      <h1 className='my-14 text-4xl font-medium'>My Bookshelf</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {storedValue.length > 0
          ? storedValue.map((book) => (
              <BookCard
                key={book.key}
                title={book.title}
                editionCount={book.editionCount}
                action={
                  <button
                    onClick={() => deleteFromBookshelf(book.key)}
                    className='mt-auto flex gap-1 w-full justify-center items-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-md py-2 px-3'
                  >
                    <TrashIcon className='h-5' />
                    <span>Delete from Bookshelf</span>
                  </button>
                }
              />
            ))
          : 'No books in your bookshelf'}
      </div>
    </div>
  );
};
