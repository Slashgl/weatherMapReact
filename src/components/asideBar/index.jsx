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
    const [isClickInput, setIsClickInput] = useState(false)

    return (
        <>
            <div className={styles.aside}>
                <Input setIsModalActive={setIsModalActive} />
                <CardAsideBar setPanel={setPanel} isPanel={isPanel} />
                {isModalActive && (
                    <Popup
                        cityList={cityList}
                        setCityList={setCityList}
                        isModalActive={isModalActive}
                        setIsModalActive={setIsModalActive}
                        isHiddenMobileList={isHiddenMobileList}
                        setIsHiddenMobileList={setIsHiddenMobileList}
                        setIsClickInput={setIsClickInput}
                    />
                )}
            </div>
            {isPanel && (
                <MobileInput
                    cityList={cityList}
                    setCityList={setCityList}
                    isPanel={isPanel}
                    setPanel={setPanel}
                    isHiddenMobileList={isHiddenMobileList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    setIsClickInput={setIsClickInput}
                    isClickInput={isClickInput}
                />
            )}
            <Panel setPanel={setPanel} isPanel={isPanel} />
        </>
    )
}
export default AsideBar
