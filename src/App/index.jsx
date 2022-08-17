import React, {useState} from 'react'
import {AsideBar, Forecast, Popup, Header, WeatherBoards, WeatherToday, BackgroundVideo} from 'components'
import {Hamburger} from "components"
import {Context} from "../components/context";
import styles from './styles.module.scss'
import stylesVideo from 'components/backgroundVideo/styles.module.scss'
import MobileInput from "../components/mobileInput";


const App = () => {
    const [modalActive, setModalActive] = useState(false)
    const [switchingModal, setSwitchingModal] = useState(false)
    const [switchingModalMobile, setSwitchingModalMobile] = useState(false)
    const [clickedInputMobile, setClickedInputMobile] = useState(false)
    const [valueInput, setValueInput] = useState('')
    const [country, setCountry] = useState([])
    const [clickOK, setClickOK] = useState(false)
    const [data, setData] = useState()
    const [nameCountry, setNameCountry] = useState()
    const [mainMenu, setMainMenu] = useState(null)
    const [closeCard, setCloseCards] = useState(false)
    const [closeWrapper, setCloseWrapper] = useState(false)
    const [addCardOfMobileAside, setCardsOfMobileAside] = useState(false)
    const [openListCountryMobile, setOpenListCountryMobile] = useState(false)

    const translateTimeOfHourAM = () => {
        return new Date().toLocaleTimeString('en-US').slice(0, 4)
    }

    const translateTimeOfHourPM = (timestamp) => {
        const time = new Date()
        time.setTime(timestamp + '000')
        const hour = time.getHours()
        const minutes = time.getMinutes()
        return `${hour}:${minutes}`
    }

    const context = {
        switchingModal, setSwitchingModal,
        setModalActive,
        setClickedInputMobile, clickedInputMobile,
        setValueInput, valueInput,
        country, setCountry,
        setClickOK, clickOK,
        data, setData,
        nameCountry, setNameCountry,
        mainMenu, setMainMenu,
        translateTimeOfHourAM,
        translateTimeOfHourPM,
        closeCard, setCloseCards,
        closeWrapper, setCloseWrapper,
        addCardOfMobileAside, setCardsOfMobileAside,
        openListCountryMobile, setOpenListCountryMobile,
        switchingModalMobile, setSwitchingModalMobile
    }

    return (
        <Context.Provider value={context}>
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
                <MobileInput/>
            </div>
        </Context.Provider>
    )
}

export default App;
