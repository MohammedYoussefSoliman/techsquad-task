import React, {useState, useEffect} from 'react';
import Post from './postItem';
import useHTTP from '../../apiServices/useHTTP';
import scss from './posts.module.scss';

const Posts = () => {

    useEffect(()=>{
        
    }, [])

    return (
        <main className={scss['posts']}>
            <Post />
        </main>
    )
}

export default Posts