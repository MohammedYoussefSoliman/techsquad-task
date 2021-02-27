import React, {useState, useEffect} from 'react';
import scss from './posts.module.scss';
import useHTTP from '../../apiServices/useHTTP';
import {endpoint_news} from '../../apiServices/base';
import {handleDate} from '../../helpers/helperFunctions';
import PostItem from './postItem';
import Spinner from '../spinner/spinner';
import Post from '../../models/post';



const Posts = () => {

    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [allPosts, setAllPosts] = useState([]);

    const {
        call,
        isLoading,
        data,
        error
    } = useHTTP(endpoint_news, 'GET', {skip, limit})
    
    useEffect(()=>call(), [skip, limit])


    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    
        if (scrollHeight - scrollTop === clientHeight) {
            setLimit(limit + 10);
            setSkip(skip + 10);
        }
      };
    

    useEffect(()=> {
        if(data) {
            let newsHolder = [];
            data.news.map(item => {
                let post = new Post(item._id, item.source.url, item.source.title, item.title, handleDate(item.created_at), item.keywords);
                newsHolder.push(post)
            });
            setAllPosts((prev)=>[...prev, ...newsHolder])
        }
    }, [data])

    return (
        <main className={scss['posts']}>
            <div
            onScroll={handleScroll}
            className={scss['posts--container']}>
                {(allPosts.length && !error) ? (allPosts.map(post =>(
                    <PostItem key={post.id} {...post} />
                ))) : ""}
                {error && <div className={scss['posts--error']}>
                            <h3 className={scss['posts--error__title']}>Ooops! cant fetch posts</h3>
                            <h3 className={scss['posts--error__desc']}>Something went wrong while fetching posts</h3>
                    </div>}
            </div>
            {isLoading && <Spinner size="60" />}
        </main>
    )
}

export default Posts