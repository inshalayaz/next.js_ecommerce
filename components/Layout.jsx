import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>E-Com</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>E-Com</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography fontWeight="600">All Rights Reserved. E-Com</Typography>
      </footer>
    </div>
  );
};

export default Layout;
