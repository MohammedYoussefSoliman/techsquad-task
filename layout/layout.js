import {useState} from 'react';
import Grid from '@material-ui/core/Grid';
// components
import Navbar from '../components/navbar/navbar';
import Drawer from '../components/drawer/drawer';
import Aside from '../components/aside/aside';
import scss from './layout.module.scss';



const Layout = ({children}) => {

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className={scss["layout"]}>
        <Navbar setOpenDrawer={setOpenDrawer} />
        <Drawer
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer} />

        <Grid container className={[scss["layout--grid"], scss['container']].join(' ')}>
            <Grid className={scss["layout--grid__aside"]} item sm={3}>
                <Aside />
            </Grid>
            <Grid item md={6}>
                {children}
            </Grid>
            <Grid className={scss["layout--grid__aside"]} item sm={3}>
                <Aside />
            </Grid>
        </Grid>
        </div>
    )
}

export default Layout