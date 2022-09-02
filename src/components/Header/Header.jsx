import React from "react";
import styles from './header.module.css'

const Header = ({handleClickCategory}) => {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
    return (

        <div className={styles.wrapper}>
            <div  className={styles.title}>News App</div>
            {
                categories.map((category) => {
                    return (<button className={styles.btn} key={category} value={category}
                                    onClick={handleClickCategory}>{category}</button>)
                })

            }</div>

    )
}
export default Header