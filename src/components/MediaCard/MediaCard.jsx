import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    maxWidth: 250,
    minHeight: 320,
    borderRadius: 10,
    padding: 5,
    margin: '1rem'
  },
  media: {
    height: 140,
  },
});

const MediaCard = React.forwardRef(({image, title}, ref) => {
  const classes = useStyles();

  return (
    <Card ref={ref} className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
    </Card>
  );
});

export default MediaCard;
