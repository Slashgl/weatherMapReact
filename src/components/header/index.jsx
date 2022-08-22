import React from 'react'
import styles from './styles.module.scss'

const Header = ({data}) => {

    return(
        <div className={styles.header}>
            <div className={styles.header__title}>{data?.name}</div>
            <div className={styles.header__degrees}>{Math.round(data?.tempCurrent)}&deg;</div>
            <div className={styles.header__description}>{data?.description}</div>
            <div className={styles.header__coordinates}>{`H:${Math.round(data?.tempHigh)}`}&deg; {`L:${Math.round(data?.tempLow)}`}&deg;</div>
        </div>
    )
}
export default Header