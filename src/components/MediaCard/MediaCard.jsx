import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './MediaCard.css';

const MediaCard = React.forwardRef(({user}, ref) => {
  const classes = useStyles();

  return (
    <Card ref={ref} className={classes.card}>
      <CardMedia
        data-testid="mediaCard"
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
