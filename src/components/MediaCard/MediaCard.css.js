import { makeStyles } from '@material-ui/core/styles';
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
      height: 128,
      width: 128,
      borderRadius: 10
    },
  });

export {useStyles};