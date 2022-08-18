import React, {useContext, useState} from 'react'
import List from './List'
import Input from '../popup/Input'
import styles from './styles.module.scss'
import {Context} from '../../context'

const Popup = ({isActive, setIsActive}) => {
    const [cityList, setCityList] = useState()

    return (
        isActive ?
            <div className={styles.popup} onClick={() => setIsActive(!isActive)}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.popup__close} onClick={() => {
                        setIsActive(false)
                    }}></div>
                        <Input setCityList={setCityList}/>
                        <List
                            classNameList={styles.popup__results}
                            classNameItem={styles.popup__item}
                            classNameName={styles.popup__name}
                            classNameCountry={styles.popup__country}
                            cityList={cityList}
                        />
                    <button type='button' className={styles.popup__button}>OK</button>
                </div>
            </div>
            : null
    )
}
export default Popup