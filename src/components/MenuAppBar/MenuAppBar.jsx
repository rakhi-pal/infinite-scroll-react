import React from 'react';
import { useStyles } from './MenuAppBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useLoginToken from '../../customHooks/useLoginToken';


export default function MenuAppBar({history}) {
  const classes = useStyles();
  const {removeToken} = useLoginToken();

  const handleOnClick = event => {
    removeToken();
    history.push('/');
    window.location.reload();
  }

  return (
    <div className={classes.menu}>
      <AppBar position="static"  data-testid="appbar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Contacts
          </Typography>
          <Button onClick={e => handleOnClick(e)} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
