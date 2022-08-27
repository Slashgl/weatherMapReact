import React, { useEffect, useState } from 'react'
import AsideBar from 'components/asideBar'
import Panel from 'components/asideBar/panel'
import MobileInput from '../components/mobileInput'
import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'
import geolocation from '../utils/geolocation'
import MainMenu from '../components/mainMenu'
import Background from '../components/mainMenu/background'
import { GetCityList } from '../store/selectors/CityList'

const App = () => {
    const [isPanel, setPanel] = useState(false)
    const [cityList, setCityList] = useState()
    const [descr, setDescr] = useState()

    const dispatch = useDispatch()
    const defaultData = GetCityList()

    const translateTimeOfHourAM = () => {
        return new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    const changeBackground = () => {
        return defaultData.map((city, index) => {
            if (city.backgroundDescription === descr || index === 0) {
                return <Background city={city} />
            }
        })
    }

    useEffect(() => {
        geolocation(dispatch)
    }, [dispatch])

    return (
        <>
            <div className={styles.App}>
                {changeBackground()}
                <MainMenu
                    translateTimeOfHourAM={translateTimeOfHourAM}
                    descr={descr}
                />
                <Panel setPanel={setPanel} />
                <AsideBar
                    cityList={cityList}
                    setCityList={setCityList}
                    translateTimeOfHourAM={translateTimeOfHourAM}
                    setPanel={setPanel}
                    setDescr={setDescr}
                />
                <MobileInput
                    cityList={cityList}
                    setCityList={setCityList}
                    isPanel={isPanel}
                    translateTimeOfHourAM={translateTimeOfHourAM}
                    setPanel={setPanel}
                    setDescr={setDescr}
                />
            </div>
        </>
    )
}

export default App
