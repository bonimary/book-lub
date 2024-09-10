import { AppBar, Box, Button, Link, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { logoutThunk } from '../../redux/auth/authThunk';

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);

  const links = [
    { to: '/books', name: 'Books' },
    { to: '/serchBook', name: 'Serch Book' },
    ...(user.status === 'logged'
      ? [
          { to: '/posts', name: 'My Posts' },
          { to: '/cats', name: 'My Cats' },
          { to: '/addBook', name: 'Add Book' },
        ]
      : [
          { to: '/signup', name: 'Sign Up' },
          { to: '/login', name: 'Login' },
        ]),
  ];

  return (
    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
      <AppBar position="static" sx={{ background: '#008080' }}>
        <Toolbar>
          <Box mr={3}>
            <Typography>Hello, {user.status === 'logged' ? user.username : 'guest'}</Typography>
          </Box>
          {links.map((link) => (
            <Link
              component={NavLink}
              key={link.name}
              to={link.to}
              sx={{ color: 'white', mr: 2, textDecoration: 'none' }}
            >
              {link.name}
            </Link>
          ))}
          {user.status === 'logged' && (
            <Button sx={{ color: 'white' }} onClick={() => void dispatch(logoutThunk())}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
