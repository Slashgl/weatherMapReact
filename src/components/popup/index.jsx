import React from 'react';
import styles from './styles.module.scss'

const Popup = ({active, setActive}) => {

    return (
        active ? <div className={styles.popup} onClick={() => setActive(false)}>
            <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.popup__close} onClick={() => setActive(false)}></div>
                <label className={styles.popup__input}>
                    <input className={styles.popup__search} type='text'/>
                </label>
                <ul className={styles.popup__results}></ul>
                <button type='button' className={styles.popup__button}>OK</button>
            </div>
        </div> : null
    )
}
export default Popup