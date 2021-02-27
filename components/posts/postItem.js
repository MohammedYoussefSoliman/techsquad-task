import Paper from '@material-ui/core/Paper';
import scss from './posts.module.scss';
import Image from 'next/image';
import {ImRss} from 'react-icons/im';


const Post = ({sourceLogo, sourceTitle, newsTitle, date, keywords}) => {
    return (
        <Paper className={[scss['paper'], scss['post']].join(' ')}>
            <div className={scss['post--header']}>
                <Image src={sourceLogo} alt="post logo" width={40} height={40} />
                <h3 className={[scss['h2__txt'], scss['post--header__title']].join(' ')}>{sourceTitle}</h3>
                <ImRss className={scss['post--header__icon']}/>
            </div>
            <div className={scss['post--body']}>
                <h1 className={scss['h1__txt']}>{newsTitle}</h1>
                <h4 className={scss['light__txt']}>{date}</h4>
            </div>
            <div className={scss['post--footer']}>
                {keywords.length ? keywords.map((word)=>(
                    <span key={word._id} className={scss['post--footer__keyword']}>{word.name}</span>
                )) : ""}
            </div>
        </Paper>
    )
}

export default Post