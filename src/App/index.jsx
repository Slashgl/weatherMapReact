import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { AsideBar, MainMenu, Background } from 'components'
import { geolocation } from 'utils'
import styles from './styles.module.scss'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        geolocation(dispatch)
    }, [dispatch])

    return (
        <div className={styles.App}>
            <Background />
            <MainMenu />
            <AsideBar/>
        </div>
    )
}

export default App
