import React from 'react'
import styles from './visited.module.css'


const VisitedCategories = ({visitedCategories}) => {
const handleClick=({target})=>{
    // console.log(target.value)
    // // localStorage.setItem('visitedCategory', category);
    // // localStorage.setItem('user', rememberMe ? user : '');

}

    const array = JSON.parse(localStorage.getItem("visitedCategories"));
    // console.log('visitedCategories',visitedCategories)
    // console.log('array',array)
    return (

     <div className={styles.wrapper}>
            <div className={styles.title}>Visited Categories</div>
            <div className={styles.content}>
                {array?.slice(-3).map((category) => {
                    return (
                        <button key={category} className={styles.btn} value={category} onClick={handleClick}>
                            {category}
                        </button>
                    )
                })}

            </div>
        </div>
    )
}


export default VisitedCategories