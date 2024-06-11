import { BookCard } from './book-card';

import { cn } from '../lib/utils';
import { useFetch } from '../hooks/use-fetch';
import { useDebounce } from '../hooks/use-debounce';
import { useSearch } from '../context/search';

export const SearchResults = ({ className }: { className?: string }) => {
  const { searchTerm } = useSearch();
  const debouncedSearchTerm = useDebounce(searchTerm);
  const { data, loading, error } = useFetch<any>(
    debouncedSearchTerm
      ? `https://openlibrary.org/search.json?q=${debouncedSearchTerm}&limit=10&page=1`
      : undefined
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

  console.log(data);

  return data?.numFound > 0 ? (
    <div className={cn('grid grid-cols-3 gap-8', className)}>
      {data?.docs.map((doc: any) => (
        <BookCard
          title={doc.title}
          editionCount={doc.edition_count}
        />
      ))}
    </div>
  ) : (
    <div className='text-center'>Book not found</div>
  );
};
