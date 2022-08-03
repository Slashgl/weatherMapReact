import React from "react";
import styles from './Popup.module.scss'

const Popup = ({active, setActive}) => {
    return (
        <div className={active ? `${styles.popup.active}` : `${styles.popup}`} onClick={() => setActive(false)}>
            <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.popup__close} onClick={() => setActive(false)}></div>
                <label className={styles.popup__input}>
                    <input className={styles.popup__search} type="text"/>
                </label>
                <ul className={styles.popup__results}></ul>
                <button type="button" className={styles.popup__button}>OK</button>
            </div>
        </div>
    )
}
export default Popup