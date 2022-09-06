import React from 'react'

import styles from './search.module.css'


export const Search = ({handleInputChange, handleSearch, inputText, handleKeyDown}) => {


    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                name="searchText"
                onChange={handleInputChange}
                value={inputText}
                onKeyDown={handleKeyDown}
                placeholder={'search news...'}
                className={styles.inpt}
            />

            <button onClick={handleSearch}
                    className={styles.btn}>Search
            </button>
        </div>
    );
};