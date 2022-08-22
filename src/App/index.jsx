import React, {useEffect, useState} from 'react'
import {AsideBar, Forecast,Header, WeatherBoards, WeatherToday, BackgroundVideo} from 'components'
import {Panel} from "components"
import MobileInput from "../components/mobileInput"
import {useDispatch} from "react-redux"
import styles from './styles.module.scss'
import stylesVideo from 'components/backgroundVideo/styles.module.scss'
import {setCity} from "../store";

const App = () => {
    const [data, setData] = useState()
    const [isPanel, setPanel] = useState(false)
    const [cityList, setCityList] = useState()
    const [isActiveMobileInput, setActiveMobileInput] = useState(false)

    const dispatch = useDispatch()

    const translateTimeOfHourAM = () => {
        return new Date().toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'})
    }

    const geoFindMe = () => {

        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            try {
                dispatch(setCity(latitude, longitude))
            }catch (e) {
                console.log(e)
            }
        }

        function error() {
            console.log('Невозможно получить ваше местоположение')
        }

        if (!navigator.geolocation) {
            console.log('Geolocation не поддерживается вашим браузером')
        } else {
            console.log('Определение местоположения…')
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    useEffect(() => {
        geoFindMe()
    }, [])
    return (
        <>
            <BackgroundVideo position={'fixed'} className={stylesVideo.bgVideo}/>
            <div className={styles.App}>
                <div>
                    <Header data={data}/>
                    <div className={styles.table}>
                        <Forecast  data={data}/>
                        <div>
                            <WeatherToday data={data}/>
                            <WeatherBoards translateTimeOfHourAM={translateTimeOfHourAM} data={data}/>
                        </div>
                    </div>
                </div>
                <Panel setPanel={setPanel}/>
                <AsideBar cityList={cityList}
                          setCityList={setCityList}
                          translateTimeOfHourAM={translateTimeOfHourAM}
                          setData={setData}
                          setActiveMobileInput={setActiveMobileInput}
                          geoFindMe={geoFindMe}
                />
                <MobileInput cityList={cityList}
                             setCityList={setCityList}
                             isPanel={isPanel}
                />
            </div>
        </>
    )
}

export default App;
