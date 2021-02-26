import Paper from '@material-ui/core/Paper';
import scss from './aside.module.scss';


const Aside = () => {
    return (
        <aside className={scss['aside']}>
            <Paper elevation="0" className={[scss['paper'], scss['aside--paper']].join(' ')}>
                <h3>aside content</h3>
            </Paper>
        </aside>
    )
}

export default Aside