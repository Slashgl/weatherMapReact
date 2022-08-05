import React from 'react';
import styles from './styles.module.scss';

const AsideBar = ({setModalActive}) => {

    return(
        <div className={styles.aside}>
            <label className={styles.aside__input}>
                <input type='text' placeholder='Search for a city or airport' onClick={() => setModalActive(true)}/>
            </label>
            <div className={styles.aside__myLocation}>
                <div className={styles.aside__left}>
                    <div className={styles.aside__title}>My location</div>
                    <div className={styles.aside__city}>Minsk</div>
                    <div className={styles.aside__description}>Partly Cloudy</div>
                </div>
                <div className={styles.aside__right}>
                    <div className={styles.aside__degrees}>21°</div>
                    <div className={styles.aside__coordinates}>H:29°  L:15°</div>
                </div>
            </div>
        </div>
    )
}
export default AsideBar;