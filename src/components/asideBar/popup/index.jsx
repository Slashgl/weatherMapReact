import React from 'react'
import List from './List'
import Input from './Input'
import styles from './styles.module.scss'

const Popup = ({
    isActive,
    setIsActive,
    setCityList,
    cityList,
    setIsHiddenMobileList,
    isHiddenMobileList,
}) => {
    return isActive ? (
        <div className={styles.popup} onClick={() => setIsActive(!isActive)}>
            <div
                className={styles.popup__content}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className={styles.popup__close}
                    onClick={() => {
                        setIsActive(false)
                    }}
                >
                    <div className={styles.popup__cross}></div>
                </div>
                <Input
                    setCityList={setCityList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isHiddenMobileList={isHiddenMobileList}
                />
                <List
                    cityList={cityList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isHiddenMobileList={isHiddenMobileList}
                />
                <button
                    type="button"
                    className={styles.popup__button}
                    onClick={() => setIsActive(false)}
                >
                    OK
                </button>
            </div>
        </div>
    ) : null
}
export default Popup
