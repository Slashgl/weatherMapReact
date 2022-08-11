import React, {useState} from 'react'
import {AsideBar, Forecast, Popup, Header, WeatherBoards, WeatherToday, BackgroundVideo} from 'components'
import {Hamburger} from "components"
import {Context} from "../components/context";
import styles from './styles.module.scss'
import stylesVideo from 'components/backgroundVideo/styles.module.scss'


const App = () => {
    const [modalActive, setModalActive] = useState(false)
    const [switchingModal, setSwitchingModal] = useState(false)
    const [clickedInputMobile, setClickedInputMobile] = useState(false)

    console.log(switchingModal)

    return (
        <Context.Provider value={{switchingModal, setSwitchingModal, setModalActive, setClickedInputMobile, clickedInputMobile}}>
            <BackgroundVideo position={'fixed'} className={stylesVideo.bgVideo}/>
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
                <AsideBar/>
                <Popup active={modalActive} setActive={setModalActive}/>
            </div>
        </Context.Provider>
    )
}

export default App;
