import React from 'react'
import NewsListItem from "../NewsListItem/NewsListItem";
import styles from './news-list.module.css'
import {useSelector} from "react-redux";


const NewsList = () => {
    const newsList = useSelector(state => state.newsList.value)

    return <div className={styles.wrapper}>
        {newsList?.map((news, index) => <NewsListItem news={news} key={index}/>)}
    </div>
}

export default NewsList;