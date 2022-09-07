import React, {useState} from 'react'

import styles from './search.module.css'
import {useDispatch} from "react-redux";
import {setSearch} from "../../redux/slices/searchSlice";

export const Search = () => {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()
    const handleInputChange = ({target}) => {
        setInputText(
            target.value,
        );
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(setSearch(inputText))
        }
    }

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

            <button onClick={() => dispatch(setSearch(inputText))}
                    className={styles.btn}>Search
            </button>
        </div>
    );
};