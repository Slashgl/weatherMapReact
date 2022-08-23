import React, {useEffect, useState} from 'react'
import {AsideBar, Forecast,Header, WeatherBoards, WeatherToday, BackgroundVideo} from 'components'
import {Panel} from "components"
import MobileInput from "../components/mobileInput"
import {useDispatch} from "react-redux"
import styles from './styles.module.scss'
import stylesVideo from 'components/backgroundVideo/styles.module.scss'
import geolocation from "../utils/geolocation";

const App = () => {
    const [data, setData] = useState()
    const [isPanel, setPanel] = useState(false)
    const [cityList, setCityList] = useState()

    const dispatch = useDispatch()

    const translateTimeOfHourAM = () => {
        return new Date().toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'})
    }



    useEffect(() => {
        geolocation(dispatch)
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
                />
                <MobileInput cityList={cityList}
                             setCityList={setCityList}
                             isPanel={isPanel}
                             setData={setData}
                             translateTimeOfHourAM={translateTimeOfHourAM}
                />
            </div>
        </>
    )
}

export default App;
