import Paper from '@material-ui/core/Paper';
import scss from './posts.module.scss';
import Image from 'next/image';
import {ImRss} from 'react-icons/im';


const Post = () => {
    return (
        <Paper className={[scss['paper'], scss['post']].join(' ')}>
            <div className={scss['post--header']}>
                <Image src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="post logo" width={100} height={30} />
                <h3>source title</h3>
                <ImRss className={scss['post--header__icon']}/>
            </div>
            <div className={scss['post--body']}>
                <h1>main Title</h1>
            </div>
            <div className={scss['post--footer']}>
                footer
            </div>
        </Paper>
    )
}

export default Post