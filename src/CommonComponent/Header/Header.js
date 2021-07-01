import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';

import Logo from "./HeaderImage/TMD.svg";
import {  NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  appBar:{
    backgroundColor:"#424c71",
    padding:10
  },
  logo: {
    marginRight: theme.spacing(2),
    maxWidth:"100%",
    height:"20px"

  },
  upComingMovie:{
    marginRight: theme.spacing(2), 
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    margin: "10px",
    fontWeight: "bold",
    marginRight: theme.spacing(2), 
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
           
            <img src={Logo} className={classes.logo} alt="movie"/>

           
          {/* <Typography variant="h6" color="inherit" className={classes.upComingMovie}>
            Upcoming Movie
          </Typography>
           */}
           <NavLink to="/up-coming-movie" className={classes.navLink}>
           Upcoming Movie
              </NavLink>
          {/* <Typography variant="h6" color="inherit">
            Toprated Movie
          </Typography> */}
           <NavLink to="/top-rated-movie" className={classes.navLink}>
           Toprated Movie
              </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
