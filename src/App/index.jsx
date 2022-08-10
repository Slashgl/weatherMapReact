import React, {useState} from 'react'
import {AsideBar, Forecast, Popup, Header, WeatherBoards, WeatherToday} from 'components'
import {Hamburger} from "components"
import {Context} from "../components/context";
import styles from './styles.module.scss'


const App = () => {
    const [modalActive, setModalActive] = useState(false)
    const [switchingModal, setSwitchingModal] = useState(false)

    return (
        <>

            <Context.Provider value={{switchingModal, setSwitchingModal, setModalActive}}>
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

                    <Hamburger/>
                    <AsideBar setModalActive={setModalActive}/>
                    <Popup active={modalActive} setActive={setModalActive}/>
                </div>
            </Context.Provider>
        </>
    )
}

export default App;
