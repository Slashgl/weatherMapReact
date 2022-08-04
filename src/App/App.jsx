import React, {useState} from 'react';
import Forecast from '../components/forecast';
import Header from '../components/header';
import AsideBar from '../components/asideBar';
import WeatherToday from '../components/weatherToday';
import WeatherBoards from '../components/weatherBoards';
import Popup from '../components/popup';
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
