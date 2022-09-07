import React, {useEffect} from 'react'
import {fetchNews} from "../../api/fetchNews";
import Header from "../Header/Header";
import {Search} from "../Search/Search";
import NewsList from "../NewsList/NewsList";
import VisitedCategories from "../VisitedCategories/VisitedCategories";
import styles from "./main.module.css"
import {useSelector, useDispatch} from 'react-redux'
import {setCategory} from "../../redux/slices/categorySlice";
import {setNewsList} from '../../redux/slices/newsListSlice'
import {setVisitedCategories} from '../../redux/slices/visitedCategorySlice'


export const Main = () => {
    const category = useSelector(state => state.category.value)
    const searchText = useSelector(state => state.search.value)
    const visitedCategories = useSelector(state => state.visitedCategory.value)
    const dispatch = useDispatch()

    const fetchArticles = async (searchText, category) => {
        const article = await fetchNews(searchText, category);
        dispatch(setNewsList(article));
    }
    useEffect(() => {
        fetchArticles(searchText, category)
    }, [searchText, category]);

    const handleClickCategory = ({target}) => {
        dispatch(setCategory(target.value))
        !visitedCategories.includes(target.value) &&
        dispatch(setVisitedCategories(target.value))
    }
    if (visitedCategories.length > 0) {
        localStorage.setItem('visitedCategories', JSON.stringify(visitedCategories.slice(-3)));
    }

    return (
        <div className={styles.wrapper}>
            <Header handleClickCategory={handleClickCategory}/>
            <Search/>
            <div className={styles.content}>
                <VisitedCategories visitedCategories={visitedCategories} handleClickCategory={handleClickCategory}/>
                <NewsList/>
            </div>
        </div>
    )
}

