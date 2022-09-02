import React from 'react'
import dayjs from 'dayjs'
import Board from '../Board'
import Header from '../Header'
import { logoSunrise, logoVector } from 'assets'
import styles from '../styles.module.scss'

const BoardsSunrise = ({ defaultData, activeIndex }) => {
    return (
        <Board>
            <Header src={logoSunrise} name={`uv index`} />
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
        </Board>
    )
}

export default BoardsSunrise
