import React from 'react'
import styles from '../NewsList/news-list.module.css'

const NewsListItem = ({news}) => {
    const {url, title, description, detail} = news;

    return (
        <div className={styles.wrapper}>
            <a href={detail} className={styles.card}>
                <img src={url} alt="news" className={styles.img}></img>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.descript}>{description}</p>
            </a>
        </div>
    )
}

export default NewsListItem