import { makeStyles } from '@material-ui/core/styles';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
    root: {
      width: 250,
    },
    listItemText: {
        color: '#00a47c'
    }
  });


const Drawer = ({openDrawer, setOpenDrawer}) => {
    
    const classes = useStyles();

    return <MUIDrawer
                anchor="right"
                open={openDrawer}
                onClose={()=>setOpenDrawer(false)}>
                    <List className={classes.root}>
                        <ListItem button>
                            <ListItemText
                                className={classes.listItemText} primary="login" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText
                                className={classes.listItemText} primary="register" />
                        </ListItem>
                    </List>
          </MUIDrawer>

}

export default Drawer
