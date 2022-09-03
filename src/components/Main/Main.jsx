import React, {useEffect, useState} from 'react'
import {fetchAllNews} from "../../api/fetchAllNews";
import Header from "../Header/Header";
import {Search} from "../Search/Search";
import {fetchNewsCategory} from "../../api/fetchNewsCategory";
import NewsList from "../NewsList/NewsList";
import VisitedCategories from "../VisitedCategories/VisitedCategories";
import styles from "./main.module.css"


export const Main = () => {

    const [newsList, setNewsList] = useState([])
    const initialState = JSON.parse(localStorage.getItem("visitedCategories"));
    const [visitedCategories, setVisitedCategories] = useState(initialState || [])

    useEffect(() => {
        const articles = async () => {
            const article = await fetchAllNews();
            setNewsList(article);
        };
        articles();
    }, []);

    const handleClickCategory = ({target}) => {
        const articles = async () => {
            const article = await fetchNewsCategory(target.value);
            setNewsList(article);
        };
        articles();
        !visitedCategories.includes(target.value) &&
        setVisitedCategories([...visitedCategories, target.value])
    }
    if (visitedCategories?.length > 0) {
        localStorage.setItem('visitedCategories', JSON.stringify(visitedCategories.slice(-3)));
    }

    return (
        <div className={styles.wrapper}>
            <Header handleClickCategory={handleClickCategory}/>
            <Search setNewsList={setNewsList}/>
            <div className={styles.content}>
                <VisitedCategories visitedCategories={visitedCategories} handleClickCategory={handleClickCategory}/>
                <NewsList newsList={newsList}/>
            </div>
        </div>
    )
}

