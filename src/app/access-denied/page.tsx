"use client";

import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const App = () => {
  return (
    <Container>
      <h1>Access Denied</h1>
      <Typography>You are not authorized to access this page.</Typography>
      <Link href="/" style={{ textDecoration: "none" }}>Go back to the homepage</Link>
    </Container>
  );
};

export default App;