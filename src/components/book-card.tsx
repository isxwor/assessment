import { ReactNode } from 'react';

export const BookCard = ({
  title,
  editionCount,
  action,
}: {
  title: string;
  editionCount: string;
  action?: ReactNode;
}) => {
  return (
    <div className='border flex gap-8 flex-col rounded-md p-4'>
      <div>
        <h1 className='text-xl font-bold'>{title}</h1>
        <div>Edition count: {editionCount}</div>
      </div>
      <div className='mt-auto'>{action}</div>
    </div>
  );
};
