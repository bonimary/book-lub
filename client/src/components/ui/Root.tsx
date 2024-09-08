import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Root(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}
