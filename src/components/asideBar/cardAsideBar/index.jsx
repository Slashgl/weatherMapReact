import React from 'react'
import {GetCityList} from "../../../store/selectors/CityList"
import {BackgroundVideo} from '../../index'
import stylesVideo from '../../backgroundVideo/styles.module.scss'
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import styles from './styles.module.scss'
import {deleteCity} from "../../../store/reducers/CityList"
import {useDispatch} from "react-redux"

const CardAsideBar = ({setData, translateTimeOfHourAM, setHidden}) => {
    const cityList = GetCityList()
    const dispatch = useDispatch()

    const removeCardAside = (id) => {
        dispatch(deleteCity(id))
    }

    const getWeatherWeek = (city) => {
        setData(city)
    }

    return (
        <>
            {
                cityList?.map((city, index) => {
                    return(

                        <div key={`key_${index}`} className={styles.cardsAside} onClick={() => {
                            getWeatherWeek(city)
                            setHidden(true)
                        }}>
                            <BackgroundVideo position={'absolute'} width={'100%'} radius={'14px'} className={stylesVideo.cardVideo}/>
                            <div className={styles.cardsAside__left}>
                                <div className={styles.cardsAside__title}>{index === 0 ? city.geoName : city.name}</div>
                                <div className={styles.cardsAside__time}>{index === 0 ? city.ipName : translateTimeOfHourAM(city.time)}</div>
                                <div className={styles.cardsAside__description}>{city.description}</div>
                            </div>
                            <div className={styles.cardsAside__right}>
                                <div className={styles.cardsAside__degrees}>{Math.round(city.tempCurrent)}&deg;</div>
                                <div className={styles.cardsAside__coordinates}>{`H:${Math.round(city.tempHigh)}`}&deg;{` L:${Math.round(city.tempLow)}`}&deg;</div>
                            </div>
                            <IconButton style={{position: 'absolute', color: 'white', right: '0'}} aria-label="delete" onClick={(e) => {
                                e.stopPropagation()
                                removeCardAside(city.id)
                            }}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    )
                })
            }
        </>
    )
}
export default CardAsideBar