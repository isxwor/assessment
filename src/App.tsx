import { Route, Routes } from 'react-router-dom';

import { RootLayout } from './components/layout/root-layout';
import { Bookshelf } from './components/pages/bookshelf';
import { Home } from './components/pages/home';
import { NotFound } from './components/pages/not-found';

export const App = () => (
  <Routes>
    <Route
      path='/'
      element={<RootLayout />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path='bookshelf'
        element={<Bookshelf />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Route>
  </Routes>
);
