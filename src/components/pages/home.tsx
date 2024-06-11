import { SearchBox } from '../search-box';
import { SearchResults } from '../search-results';

export const Home = () => (
  <div className='container flex flex-col'>
    <SearchBox className='my-14' />
    <SearchResults />
  </div>
);
