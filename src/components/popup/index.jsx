import React from 'react';
import countryApi from "../../services/countryApi";
import styles from './styles.module.scss'

const Popup = ({active, setActive}) => {
    const api = countryApi()

    return (
        active ? <div className={styles.popup} onClick={() => setActive(false)}>
            <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.popup__close} onClick={() => setActive(false)}></div>
                <label className={styles.popup__input}>
                    <input className={styles.popup__search} type='text'/>
                </label>
                <ul className={styles.popup__results}>
                    {api && api.map(el => {
                        return (
                            <li key={el.city} className={styles.popup__item}>
                                <div className={styles.popup__name}>{el.city}</div>
                                <div className={styles.popup__country}>{el.state}</div>
                            </li>
                        )
                    })}
                </ul>
                <button type='button' className={styles.popup__button}>OK</button>
            </div>
        </div> : null
    )
}
export default Popup