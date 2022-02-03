import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#fff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyles;
