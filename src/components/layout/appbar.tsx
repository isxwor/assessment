import { Link } from 'react-router-dom';
import { BookmarkIcon } from '../icons/bookmark';

export const Appbar = () => (
  <header className='sticky top-0 border-b z-10 bg-background py-4'>
    <div className='container flex items-center justify-between'>
      <Link
        to='/'
        className='flex gap-2 items-center'
      >
        <img
          src='./logo512.png'
          alt='Dummy Logo'
          className='h-10'
        />
        <span className='font-medium text-2xl text-primary'>
          Personal Bookshelf
        </span>
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
