import React, { Children, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/ui/Root';
import BooksPage from './components/pages/BooksPage';
import OneBookPage from './components/pages/OneBookPage';
import ChoisePage from './components/pages/ChoisePage';
import AddBookPage from './components/pages/AddBookPage';
import { useAppDispatch, useAppSelector } from './redux/hook';
import { getBooksThunk } from './redux/books/booksThunk';
import { checkUserThunk } from './redux/auth/authThunk';
import PrivateRouter from './components/hoocs/PrivateRouter';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);

  useEffect(() => {
    void dispatch(getBooksThunk());
  }, []);

  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/books', element: <BooksPage /> },
        {
          element: <PrivateRouter isAllowed={user.status === 'logged'} redirect="/login" />,
          children: [
            { path: '/books/:id', element: <OneBookPage /> },
            { path: '/serchBook', element: <ChoisePage /> },
            { path: '/addBook', element: <AddBookPage /> },
          ],
        },
        {
          element: <PrivateRouter isAllowed={user.status !== 'logged'} redirect="/cats" />,
          children: [
            {
              path: '/signup',
              element: <SignUpPage />,
            },
            {
              path: '/login',
              element: <LoginPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
