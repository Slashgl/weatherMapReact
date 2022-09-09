import React from "react";
import styles from './styles.module.scss'

const Header = ({imgSrc, title}) => {
    return (
        <div className={styles.header}>
            <img src={imgSrc} alt="img" />
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default Header