import React from 'react'
import List from './List'
import Input from './Input'
import styles from './styles.module.scss'

const Popup = ({
    isModalActive,
    setIsModalActive,
    setCityList,
    cityList,
    setIsHiddenMobileList,
    isHiddenMobileList,
    setIsClickInput,
}) => {
    return (
        <div
            className={styles.popup}
            onClick={() => setIsModalActive(!isModalActive)}
        >
            <div
                className={styles.popup__content}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className={styles.popup__close}
                    onClick={() => {
                        setIsModalActive(false)
                    }}
                >
                    <div className={styles.popup__cross}></div>
                </div>
                <Input
                    setCityList={setCityList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isHiddenMobileList={isHiddenMobileList}
                    setIsClickInput={setIsClickInput}
                />
                <List
                    cityList={cityList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isHiddenMobileList={isHiddenMobileList}
                    setIsClickInput={setIsClickInput}
                />
                <button
                    type="button"
                    className={styles.popup__button}
                    onClick={() => setIsModalActive(false)}
                >
                    OK
                </button>
            </div>
        </div>
    )
}
export default Popup
