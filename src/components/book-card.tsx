import { BookmarkIcon } from './icons/bookmark';

export const BookCard = ({
  title,
  editionCount,
}: {
  title: string;
  editionCount: string;
}) => (
  <div className='border flex gap-8 flex-col rounded-md p-4'>
    <div>
      <h1 className='text-xl font-bold'>{title}</h1>
      <div>Edition cout: {editionCount}</div>
    </div>
    <button className='mt-auto flex gap-1 w-full justify-center items-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-md py-2 px-3'>
      <BookmarkIcon />
      <span>Add to Bookshelf</span>
    </button>
  </div>
);
