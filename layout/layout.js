import Grid from '@material-ui/core/Grid';
// components
import Navbar from '../components/navbar/navbar';
import Aside from '../components/aside/aside';
import scss from './layout.module.scss';



const Layout = ({children}) => {

    return (
        <div className={scss["layout"]}>
        <Navbar />
        <Grid container className={[scss["layout--grid"], scss['container']].join(' ')}>
            <Grid item xs={3}>
                <Aside />
            </Grid>
            <Grid item xs={6}>
                {children}
            </Grid>
            <Grid item xs={3}>
                <Aside />
            </Grid>
        </Grid>
        </div>
    )
}

export default Layout