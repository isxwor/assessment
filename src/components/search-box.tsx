import { SearchIcon } from './icons/search';
import { Input } from './ui/input';

import { useSearch } from '../context/search';
import { cn } from '../lib/utils';

export const SearchBox = ({ className }: { className?: string }) => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className={cn('relative', className)}>
      <div className='absolute flex items-center h-full px-3 text-muted-foreground'>
        <SearchIcon />
      </div>
      <Input
        placeholder='Search by book name...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
