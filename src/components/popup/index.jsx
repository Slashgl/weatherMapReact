import React, {useContext, useEffect} from 'react'
import List from './List'
import {Input} from '../asideBar/input'
import styles from './styles.module.scss'
import {Context} from '../context'
import {weatherApi} from 'services'


const Popup = ({active, setActive}) => {
    let {setClickOK,clickOK} = useContext(Context)

    const getCountry = async () => {
        const res = await weatherApi.getListCountry('Paris')
        console.log(res)
    }
    const getDataWeather = async () => {
        const res = await weatherApi.getDataWeather('55', '30')
        console.log(res)
    }

    useEffect(() => {
        getCountry()
        getDataWeather()
    }, [])

    return (
        active ?
            <div className={styles.popup} onClick={() => setActive(!clickOK)}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.popup__close} onClick={() => {
                        setActive(false)
                    }}></div>
                    <Input className={styles.popup__input}/>
                        <List
                            classNameList={styles.popup__results}
                            classNameItem={styles.popup__item}
                            classNameName={styles.popup__name}
                            classNameCountry={styles.popup__country}

                        />
                    <button type='button' className={styles.popup__button} onClick={() => setClickOK(true)}>OK</button>
                </div>
            </div>
            : null
    )
}
export default Popup