import { Link } from 'react-router-dom';
import { BookmarkIcon } from '../icons/bookmark';

export const Appbar = () => (
  <header className='sticky top-0 border-b z-10 bg-background py-4'>
    <div className='container flex items-center justify-between'>
      <Link to='/'>
        <img
          src='/me_logo.png'
          alt="Marquee Equity's logo"
          className='h-10'
        />
      </Link>
      <Link
        to='/bookshelf'
        className='flex gap-1 items-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-md py-2 px-3'
      >
        <BookmarkIcon />
        <span>My Bookshelf</span>
      </Link>
    </div>
  </header>
);
