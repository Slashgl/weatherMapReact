import React, {useState} from "react";
import Forecast from "../Forecast/Forecast";
import Header from "../Header/Header";
import AsideBar from "../AsideBar/AsideBar";
import WeatherToday from "../Weather-Today/Weather-Today";
import WeatherBoards from "../WeatherBoards/WeatherBoards";
import Popup from "../Popup/Popup";

import styles from './App.module.scss';
const App = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={styles.App}>
            <div>
                <Header/>
                <div className={styles.table}>
                    <Forecast/>
                    <div>
                        <WeatherToday/>
                        <WeatherBoards/>
                    </div>
                </div>
            </div>
            <AsideBar setModalActive={setModalActive}/>
            <Popup active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default App;
