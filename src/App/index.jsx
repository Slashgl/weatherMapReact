import React, {useState} from 'react';
import {AsideBar, Forecast, Popup, Header, WeatherBoards, WeatherToday} from 'components';
import styles from './styles.module.scss';

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
