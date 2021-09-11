import { makeStyles } from "@material-ui/core";
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

export {useStyles};