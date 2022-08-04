import React from 'react';
import styles from './styles.module.scss';

const Header = () => {

    return(
        <div className={styles.header}>
            <div className={styles.header__title}>Minsk</div>
            <div className={styles.header__degrees}>21°</div>
            <div className={styles.header__description}>Partly Cloudy</div>
            <div className={styles.header__coordinates}>H:29°  L:15°</div>
        </div>
    )
}
export default Header;