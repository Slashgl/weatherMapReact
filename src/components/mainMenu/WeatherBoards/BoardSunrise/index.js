import React from 'react'
import dayjs from 'dayjs'
import Header from '../Header'
import { logoSunrise, logoVector } from 'assets'
import styles from '../styles.module.scss'

const BoardsSunrise = ({ defaultData, activeIndex }) => {
    return (
        <div className={styles.board}>
            <Header src={logoSunrise} name={`sunrise`} />
            <div className={styles.board__time}>
                {dayjs.unix(defaultData[activeIndex]?.time).format('hh:mm A')}
            </div>
            <div className={styles.board__imgVector}>
                <img
                    className={styles.board__vector}
                    src={logoVector}
                    alt="img"
                />
            </div>
            <div className={styles.board__description}>
                Sunrise:{' '}
                {dayjs
                    .unix(defaultData[activeIndex]?.sunrise)
                    .format('hh:mm A')}
            </div>
        </div>
    )
}

export default BoardsSunrise
