import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type SearchContext = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const initialSearchContext: SearchContext = {
  searchTerm: '',
  setSearchTerm: () => {},
};

export const searchContext = createContext<SearchContext>(initialSearchContext);

export const SearchProvider = ({ children }: { children?: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm: handleSearchTermChange,
    }),
    [searchTerm, handleSearchTermChange]
  );

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(searchContext);

  if (!context) {
    throw new Error('`useSearch` must be used within a SearchProvider');
  }

  return context;
};
