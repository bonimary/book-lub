import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/ui/Root';
import BooksPage from './components/pages/BooksPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [{ path: '/books', element: <BooksPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
