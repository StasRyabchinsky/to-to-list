import React from "react";
import styles from './style.module.scss'

export const AsideGroup = () => {
    return (
        <>
            <button className={styles.asideGroup}>asideGroup</button>
            <button className={styles.asideGroup}>asideGroup</button>
            <button className={styles.asideGroup}>asideGroup</button>
            <button className={styles.asideGroup}>asideGroup</button>
            <button className={styles.asideGroup}>asideGroup</button>
            <div className={styles.asideBottomSpace}></div>
        </>
    )
}