import React, { useState } from 'react';
import { AppBar, Grid, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logoFavicon from '../../images/logoFavicon.jpg';
import useStyles from './styles';
import Pagination from '../Pagination';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Footer = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const [tags, setTags] = useState([]);
  const searchQuery = query.get('searchQuery');

  return (
    <><AppBar className={classes.appBar} position="static" color="inherit">
      <Grid container>
        <Grid component={Link} to="/" className={classes.grid1} item xs={2}>
          <p className={classes.para}>Social Blog</p>
          <img className={classes.image} src={logoFavicon} alt="icon" height="45px" /><br />
          <p className={classes.para}>Created by Aditya Kashyap</p>
        </Grid>
        <Grid className={classes.grid2} item xs={8}>
          {(!searchQuery && !tags.length) && (
            <Pagination className={classes.pagination} elevation={6} page={page} />
          )}
        </Grid>
        <Grid component={Link} to="/" className={classes.grid3} item xs={2}>
            <b>Home</b><br />
            <b>About</b><br />
            <b>Contact</b><br />
          <div className={classes.sociallinks}>
            <b>Social Links</b><br />
            <FacebookIcon fontSize='small' />
            <LinkedInIcon fontSize='small' />
            <YouTubeIcon fontSize='small' />
            <TwitterIcon fontSize='small' />
          </div>
        </Grid>
      </Grid>
    </AppBar>
    <Paper className={classes.paper} elevation={6}>
      <Pagination className={classes.pagination} page={page} />
    </Paper></>
  );
};

export default Footer;
