import React from 'react';
import Head from 'next/head';
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Ecommerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>My EC</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>

      <footer>
        <Typography>All right reserved. Next Ecommerce</Typography>
      </footer>
    </div>
  );
}
