import React from 'react'
import List from './List';
import {countryApi} from 'services';
import styles from './styles.module.scss'
import {Input} from "../asideBar/input";


const Popup = ({active, setActive}) => {
    const api = countryApi()

    return (
        active ?
            <div className={styles.popup} onClick={() => setActive(false)}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.popup__close} onClick={() => setActive(false)}></div>
                    <Input className={styles.popup__input}/>
                        <List
                            api={api}
                            classNameList={styles.popup__results}
                            classNameItem={styles.popup__item}
                            classNameName={styles.popup__name}
                            classNameCountry={styles.popup__country}
                        />
                    <button type='button' className={styles.popup__button}>OK</button>
                </div>
            </div>
            : null
    )
}
export default Popup