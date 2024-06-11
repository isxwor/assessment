import { Outlet } from 'react-router-dom';

import { Appbar } from './appbar';

export const RootLayout = () => (
  <div>
    <Appbar />
    <Outlet />
  </div>
);
