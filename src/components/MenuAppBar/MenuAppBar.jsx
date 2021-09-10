import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useLoginToken from '../../customHook/useLoginToken';

const useStyles = makeStyles((theme) => ({
  menu: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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
      <AppBar position="static">
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
