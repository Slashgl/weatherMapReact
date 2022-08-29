import React from 'react'
import { GetActiveIndex, GetCityList } from '../../store/selectors/CityList'
import Index from './Header'
import Forecast from './Forecast'
import WeatherToday from './WeatherToday'
import WeatherBoards from './WeatherBoards'
import styles from './styles.module.scss'

const MainMenu = () => {
    const defaultData = GetCityList()
    const activeIndex = GetActiveIndex()

    return (
        <>
            <div className={styles.mainMenu}>
                <Index defaultData={defaultData} activeIndex={activeIndex} />
                <div className={styles.table}>
                    <Forecast
                        defaultData={defaultData}
                        activeIndex={activeIndex}
                    />
                    <div>
                        <WeatherToday
                            defaultData={defaultData}
                            activeIndex={activeIndex}
                        />
                        <WeatherBoards
                            defaultData={defaultData}
                            activeIndex={activeIndex}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainMenu
