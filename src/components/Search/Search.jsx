import React, {useState} from 'react'
import {fetchSearchNews} from "../../api/fetchSearchNews";
import styles from './search.module.css'


export const Search = ({setNewsList}) => {
    const [searchText, setSearchText] = useState('');
    const handleInputChange = ({target}) => {
        setSearchText(
            target.value,
        );
    };
    const handleSearch = () => {
        if (searchText) {
            const articles = async () => {
                const article = await fetchSearchNews(searchText);
                setNewsList(article);
            };
            articles();
            setSearchText('')
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
            setSearchText('')
        }
    }

    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                name="searchText"
                onChange={handleInputChange}
                value={searchText}
                onKeyDown={handleKeyDown}
                placeholder={'search news...'}
                className={styles.inpt}
            />

            <button onClick={handleSearch}
            className={styles.btn}>Search</button>
        </div>
    );
};