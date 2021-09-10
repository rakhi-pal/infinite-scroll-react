import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    flex: '1 1 0',
    minWidth: 250,
    maxWidth: 250,
    minHeight: 270,
    borderRadius: 10,
    padding: 5,
    margin: '1rem',
    '&:hover': {
			transform: 'scale(1.3)'
    }
  },
  media: {
    height: 140,
  },
});

const MediaCard = React.forwardRef(({image, title, user}, ref) => {
  const classes = useStyles();

  return (
    <Card ref={ref} className={classes.card}>
      <CardMedia
        className={classes.media}
        image={user.picture.large}
        title={user.name.first +" " + user.name.last}
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name.first +" " + user.name.last}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <label>{user.email}</label><br/>
            <label>phone: {user.phone}</label><br/>
            <label>cell: {user.cell}</label>
          </Typography>
        </CardContent>
    </Card>
  );
});

export default MediaCard;
