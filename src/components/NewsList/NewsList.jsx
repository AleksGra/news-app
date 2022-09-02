import React from 'react'
import NewsListItem from "../NewsListItem/NewsListItem";
import styles from './news-list.module.css'

const NewsList=({newsList})=>{
    return(
        <>
            <div className={styles.wrapper}>
                {newsList.map((news) => (
                    <NewsListItem news={news} key={news.title} />
                ))}
            </div>
        </>
    )
}


export default NewsList