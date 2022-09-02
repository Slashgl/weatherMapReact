import React, { useState } from 'react'
import Input from './input'
import Popup from './popup'
import CardAsideBar from './cardAsideBar'
import MobileInput from './mobileInput'
import Panel from './panel'
import styles from './styles.module.scss'

const AsideBar = () => {
    const [isPanel, setPanel] = useState(false)
    const [cityList, setCityList] = useState()
    const [isModalActive, setIsModalActive] = useState(false)
    const [isHiddenMobileList, setIsHiddenMobileList] = useState(false)

    return (
        <>
            <div className={styles.aside}>
                <Input
                    setIsModalActive={setIsModalActive}
                />
                <CardAsideBar setPanel={setPanel} isPanel={isPanel}/>
                <Popup
                    cityList={cityList}
                    setCityList={setCityList}
                    isActive={isModalActive}
                    setIsActive={setIsModalActive}
                    isHiddenMobileList={isHiddenMobileList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                />
            </div>
            <MobileInput
                cityList={cityList}
                setCityList={setCityList}
                isPanel={isPanel}
                setPanel={setPanel}
                isHiddenMobileList={isHiddenMobileList}
                setIsHiddenMobileList={setIsHiddenMobileList}
            />
            <Panel setPanel={setPanel} isPanel={isPanel} />
        </>
    )
}
export default AsideBar
