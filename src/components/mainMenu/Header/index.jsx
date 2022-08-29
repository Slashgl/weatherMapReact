import React from 'react'
import styles from './styles.module.scss'

const Index = ({ defaultData, activeIndex }) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__title}>
                {defaultData[activeIndex]?.name ||
                    defaultData[activeIndex]?.ipName}
            </div>
            <div className={styles.header__degrees}>
                {Math.round(defaultData[activeIndex]?.tempCurrent)}&deg;
            </div>
            <div className={styles.header__description}>
                {defaultData[activeIndex]?.description}
            </div>
            <div className={styles.header__coordinates}>
                {`H:${Math.round(defaultData[activeIndex]?.tempHigh)}`}
                &deg; {`L:${Math.round(defaultData[activeIndex]?.tempLow)}`}
                &deg;
            </div>
        </div>
    )
}

export default Index
