import React from 'react'
import {Forecast, Header, WeatherBoards, WeatherToday} from "../index";
import styles from "../../App/styles.module.scss";

const MainMenu = () => {
    const translateTimeOfHourAM = () => {
        return new Date().toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'})
    }

    return(
        <div>
            <Header/>
            <div className={styles.table}>
                <Forecast />
                <div>
                    <WeatherToday />
                    <WeatherBoards translateTimeOfHourAM={translateTimeOfHourAM}/>
                </div>
            </div>
        </div>
    )
}
export default MainMenu