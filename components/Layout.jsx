import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

const Layout = ({ title, description, children }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - E-Com` : 'E-Com'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link className={classes.link}>
              <Typography className={classes.brand}>E-Com</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link className={classes.link}>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link className={classes.link}>Login</Link>
            </NextLink>
          </div>
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
