import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {AsideBar, MainMenu} from 'components'
import geolocation from 'utils/geolocation'
import Background from 'components/mainMenu/background'
import styles from './styles.module.scss'

const App = () => {
    const [isPanel, setPanel] = useState(false)
    const [cityList, setCityList] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        geolocation(dispatch)
    }, [dispatch])

    return (
        <>
            <div className={styles.App}>
                <Background />
                <MainMenu />
                <AsideBar
                    cityList={cityList}
                    setCityList={setCityList}
                    setPanel={setPanel}
                    isPanel={isPanel}
                />
            </div>
        </>
    )
}

export default App
