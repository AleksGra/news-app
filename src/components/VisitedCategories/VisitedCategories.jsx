import React from 'react'
import styles from './visited.module.css'


const VisitedCategories = ({handleClickCategory}) => {

    const array = JSON.parse(localStorage.getItem("visitedCategories"));

    return (

        <div className={styles.wrapper}>
            <div className={styles.title}>Visited Categories</div>
            <div className={styles.content}>
                {array?.slice(-3).map((category) => {
                    return (
                        <button className={styles.btn} key={category} value={category}
                                onClick={handleClickCategory}>{category}</button>
                    )
                })}

            </div>
        </div>
    )
}


export default VisitedCategories