import React, { useState } from 'react'
import Input from './input'
import Popup from './popup'
import CardAsideBar from './cardAsideBar'
import MobileInput from './mobileInput'
import Panel from './panel'
import styles from './styles.module.scss'

const AsideBar = ({ setCityList, cityList, setPanel, isPanel }) => {
    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <>
            <div className={styles.aside}>
                <Input
                    className={styles.aside__input}
                    placeholder={`Search for a city or airport`}
                    setIsModalActive={setIsModalActive}
                />
                <CardAsideBar />
                <Popup
                    cityList={cityList}
                    setCityList={setCityList}
                    isActive={isModalActive}
                    setIsActive={setIsModalActive}
                />
            </div>
            <MobileInput
                cityList={cityList}
                setCityList={setCityList}
                isPanel={isPanel}
                setPanel={setPanel}
            />
            <Panel setPanel={setPanel} />
        </>
    )
}
export default AsideBar
