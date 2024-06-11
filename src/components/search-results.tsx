import { useCallback } from 'react';

import { BookCard } from './book-card';
import { BookmarkIcon } from './icons/bookmark';

import { cn } from '../lib/utils';
import { useSearch } from '../context/search';
import { useDebounce } from '../hooks/use-debounce';
import { useFetch } from '../hooks/use-fetch';
import { useLocalStorage } from '../hooks/use-local-storage';

import { BookType } from '../types/book';

export const SearchResults = ({ className }: { className?: string }) => {
  const { searchTerm } = useSearch();
  const debouncedSearchTerm = useDebounce(searchTerm);
  const { data, loading, error } = useFetch<any>(
    debouncedSearchTerm
      ? `https://openlibrary.org/search.json?q=${debouncedSearchTerm}&limit=10&page=1`
      : undefined
  );
  const [storedValue, setStoredValue] = useLocalStorage<BookType[]>(
    'bookshelf',
    []
  );

  const isStoredInBookshelf = useCallback(
    (key: string) => storedValue.some((book) => book.key === key),
    [storedValue]
  );

  const addToBookshelf = useCallback(
    (data: BookType) => {
      setStoredValue((prev) => [...prev, data]);
    },
    [setStoredValue]
  );

  if (!searchTerm) {
    return <div className='text-center'>No book searched</div>;
  }

  if (loading) {
    return <div className={cn('text-center', className)}>Loading....</div>;
  }

  if (error) {
    return <div className='text-center'>Error: {error.message}</div>;
  }

  const renderBookCards = () => {
    if (!data || data.numFound === 0) {
      return <div className='text-center'>Book not found</div>;
    }

    return data.docs.map((doc: any) => (
      <BookCard
        key={doc.key}
        title={doc.title}
        editionCount={doc.edition_count}
        action={
          isStoredInBookshelf(doc.key) ? null : (
            <button
              onClick={() =>
                addToBookshelf({
                  key: doc.key,
                  title: doc.title,
                  editionCount: doc.edition_count,
                })
              }
              className='flex gap-1 w-full justify-center items-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-md py-2 px-3'
            >
              <BookmarkIcon />
              <span>Add to Bookshelf</span>
            </button>
          )
        }
      />
    ));
  };

  return (
    <div className={cn('grid sm:grid-cols-2 md:grid-cols-3 gap-8', className)}>
      {renderBookCards()}
    </div>
  );
};
