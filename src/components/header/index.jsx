import React, {useContext} from 'react'
import styles from './styles.module.scss'
import {Context} from "../context";

const Header = () => {

    const {mainMenu, nameCountry} = useContext(Context)

    return(
        <div className={styles.header}>
            <div className={styles.header__title}>{nameCountry}</div>
            <div className={styles.header__degrees}>{Math.round(mainMenu?.current.temp)}&deg;</div>
            <div className={styles.header__description}>{mainMenu?.current.weather.map(descr => descr.description)}</div>
            <div className={styles.header__coordinates}>{`H:${Math.round(mainMenu?.lat)}`}&deg; {`L:${Math.round(mainMenu?.lon)}`}&deg;</div>
        </div>
    )
}
export default Header