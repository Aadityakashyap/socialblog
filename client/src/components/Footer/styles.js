import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 600,
      xxl: 5000,
    },
  },
});

export default makeStyles({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      display: 'none !important',
    },
    backgroundColor: '#F2F2F2 !important',
  },
  sociallinks: {
    justifyContent: 'space-between',
  },
  grid1: {
    paddingTop: '5px',
    paddingBottom: '5px',
    alignItems: 'center',
    color: '#000000 !important',
    textDecoration: 'none',
  },
  grid2: {
    paddingTop: '50px',
    paddingBottom: '50px',

  },
  grid3: {
    justifyContent: 'space-between',
    padding: '20px',
    alignItems: 'center',
    color: '#000000 !important',
    textDecoration: 'none',

  },
  para: {
    fontFamily: 'Pacifico, cursive !important',
  },
  image: {
    padding: '0 15px 0 15px',
  },
  paper: {
    [theme.breakpoints.down('xxl')]: {
      display: 'none !important',
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: 15,
      margin: '30px 0',
      alignItems: 'center',
      padding: '10px 50px',
      display: 'flex !important',
      justifyContent: 'space-between',
    },
  }
});
