import React from 'react'
import styles from './styles.module.scss'

const Panel = ({ setPanel, isPanel }) => {
    const stopScrollBody = () => {
        return (document.body.style.overflowY = 'hidden')
    }

    const setOpeningAndClosingAsideBar = () => {
        setPanel(!isPanel)
    }

    return (
        <div className={styles.panel}>
            <div className={styles.panel__wrapper}>
                <div
                    className={styles.panel__btn}
                    onClick={() => {
                        setOpeningAndClosingAsideBar()
                        stopScrollBody()
                    }}
                >
                    <div className={styles.panel__line}></div>
                    <div className={styles.panel__line}></div>
                    <div className={styles.panel__line}></div>
                </div>
            </div>
        </div>
    )
}

export default Panel
