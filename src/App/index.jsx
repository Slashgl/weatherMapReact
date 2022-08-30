import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GetActiveIndex, GetCityList } from 'store/selectors/CityList'
import AsideBar from 'components/asideBar'
import Panel from 'components/asideBar/panel'
import MobileInput from 'components/mobileInput'
import geolocation from 'utils/geolocation'
import MainMenu from 'components/mainMenu'
import Background from 'components/mainMenu/background'
import styles from './styles.module.scss'

const App = () => {
    const [isPanel, setPanel] = useState(false)
    const [cityList, setCityList] = useState()

    const dispatch = useDispatch()
    const defaultData = GetCityList()
    const activeIndex = GetActiveIndex()

    useEffect(() => {
        geolocation(dispatch)
    }, [dispatch])

    return (
        <>
            <div className={styles.App}>
                <Background city={defaultData[activeIndex]} />
                <MainMenu />
                <Panel setPanel={setPanel} />
                <AsideBar
                    cityList={cityList}
                    setCityList={setCityList}
                    setPanel={setPanel}
                />
                <MobileInput
                    cityList={cityList}
                    setCityList={setCityList}
                    isPanel={isPanel}
                    setPanel={setPanel}
                />
            </div>
        </>
    )
}

export default App
