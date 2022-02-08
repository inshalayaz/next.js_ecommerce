import React, { useContext } from 'react';
import Head from 'next/head';
import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppContext } from '../utils/AppContext';
import jsCookie from 'js-cookie';

const Layout = ({ title, description, children }) => {
  const { state, dispatch } = useContext(AppContext);
  const { darkMode } = state;
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem , 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
        secondary: '#208080',
      },
    },
  });

  console.log(darkMode);
  const handleChange = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkValue = !darkMode;
    jsCookie.set('darkMode', newDarkValue ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - E-Com` : 'E-Com'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link className={classes.link}>
                <Typography className={classes.brand}>E-Com</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode} onChange={handleChange}></Switch>
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
      </ThemeProvider>
    </div>
  );
};

export default Layout;
