import React, {useEffect, useState} from 'react'
import {AsideBar, BackgroundVideo} from 'components'
import {Panel} from "components"
import MobileInput from "../components/mobileInput"
import {useDispatch} from "react-redux"
import styles from './styles.module.scss'
import stylesVideo from 'components/mainMenu/backgroundVideo/styles.module.scss'
import geolocation from "../utils/geolocation";
import MainMenu from "../components/mainMenu";


const App = () => {
    const [isPanel, setPanel] = useState(false)
    const [cityList, setCityList] = useState()

    const dispatch = useDispatch()

    const translateTimeOfHourAM = () => {
        return new Date().toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'})
    }

    useEffect(() => {
        geolocation(dispatch)
    }, [dispatch])

    return (
        <>
            <BackgroundVideo position={'fixed'} className={stylesVideo.bgVideo}/>
            <div className={styles.App}>
                <MainMenu translateTimeOfHourAM={translateTimeOfHourAM}/>
                <Panel setPanel={setPanel}/>
                <AsideBar cityList={cityList}
                          setCityList={setCityList}
                          translateTimeOfHourAM={translateTimeOfHourAM}
                          setPanel={setPanel}
                />
                <MobileInput cityList={cityList}
                             setCityList={setCityList}
                             isPanel={isPanel}
                             translateTimeOfHourAM={translateTimeOfHourAM}
                             setPanel={setPanel}
                />
            </div>
        </>
    )
}

export default App;
