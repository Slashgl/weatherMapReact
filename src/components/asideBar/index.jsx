import React, { useState } from 'react'
import Input from './input'
import Popup from './popup'
import CardAsideBar from './cardAsideBar'
import styles from './styles.module.scss'

const AsideBar = ({ setCityList, cityList, setDescr }) => {
    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <div className={styles.aside}>
            <Input
                className={styles.aside__input}
                placeholder={`Search for a city or airport`}
                setIsModalActive={setIsModalActive}
            />
            <CardAsideBar setDescr={setDescr} />
            <Popup
                cityList={cityList}
                setCityList={setCityList}
                isActive={isModalActive}
                setIsActive={setIsModalActive}
            />
        </div>
    )
}
export default AsideBar
