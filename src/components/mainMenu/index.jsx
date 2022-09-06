import React from 'react'
import Header from './Header'
import Forecast from './Forecast'
import WeatherToday from './WeatherToday'
import WeatherBoards from './WeatherBoards'
import styles from './styles.module.scss'

const MainMenu = () => {

    return (
        <div className={styles.mainMenu}>
            <Header />
            <div className={styles.table}>
                <Forecast />
                <div>
                    <WeatherToday />
                    <WeatherBoards />
                </div>
            </div>
        </div>
    )
}
export default MainMenu
