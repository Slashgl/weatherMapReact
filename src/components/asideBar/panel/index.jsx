import React from 'react'
import Line from './Line'
import styles from './styles.module.scss'

const Panel = ({ setPanel, isPanel }) => {
    const setOpeningAndClosingAsideBar = () => {
        setPanel(!isPanel)
    }

    return (
        <div className={styles.panel}>
            <div className={styles.panel__wrapper}>
                <div
                    className={styles.panel__btn}
                    onClick={() => setOpeningAndClosingAsideBar()}
                >
                    <Line />
                </div>
            </div>
        </div>
    )
}

export default Panel
