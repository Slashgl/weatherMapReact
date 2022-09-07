import React from 'react'
import styles from './styles.module.scss'
import Line from './Line'

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
                    <Line />
                </div>
            </div>
        </div>
    )
}

export default Panel
