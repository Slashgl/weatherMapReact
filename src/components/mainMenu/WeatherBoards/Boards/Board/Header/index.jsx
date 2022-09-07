import React from "react";
import styles from './styles.module.scss'

const Header = ({imgSrc, boards}) => {
    return (
        <div className={styles.header}>
            <img src={imgSrc} alt="img" />
            <div className={styles.title}>
                {boards}
            </div>
        </div>
    )
}

export default Header