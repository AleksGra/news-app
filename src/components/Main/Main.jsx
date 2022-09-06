import React, {useEffect, useState} from 'react'
import {fetchNews} from "../../api/fetchNews";
import Header from "../Header/Header";
import {Search} from "../Search/Search";
import NewsList from "../NewsList/NewsList";
import VisitedCategories from "../VisitedCategories/VisitedCategories";
import styles from "./main.module.css"


export const Main = () => {
    const [newsList, setNewsList] = useState([])
    const initialState = JSON.parse(localStorage.getItem("visitedCategories"));
    const [visitedCategories, setVisitedCategories] = useState(initialState || [])
    const [inputText, setInputText] = useState('')
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('')

    console.log('searchText', searchText)
    console.log('category', category)
    const handleInputChange = ({target}) => {
        setInputText(
            target.value,
        );
    };
    const handleSearch = () => {
        setSearchText(inputText)
        setInputText('')
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
            setInputText('')
        }
    }
    const fetchArticles = async (searchText, category) => {
        const article = await fetchNews(searchText, category);
        setNewsList(article);
    }

    useEffect(() => {
        fetchArticles(searchText, category)
    }, [searchText, category]);

    const handleClickCategory = ({target}) => {
        setCategory(target.value)
        !visitedCategories.includes(target.value) &&
        setVisitedCategories([...visitedCategories, target.value])
    }
    if (visitedCategories.length > 0) {
        localStorage.setItem('visitedCategories', JSON.stringify(visitedCategories.slice(-3)));
    }

    return (
        <div className={styles.wrapper}>
            <Header handleClickCategory={handleClickCategory}/>
            <Search setNewsList={setNewsList} handleInputChange={handleInputChange}
                    inputText={inputText} handleSearch={handleSearch} handleKeyDown={handleKeyDown}/>
            <div className={styles.content}>
                <VisitedCategories visitedCategories={visitedCategories} handleClickCategory={handleClickCategory}/>
                <NewsList newsList={newsList}/>
            </div>
        </div>
    )
}

