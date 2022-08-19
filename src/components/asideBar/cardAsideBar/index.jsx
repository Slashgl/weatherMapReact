import React from 'react'
import {GetCityList} from "../../../store/selectors/CityList"
import {BackgroundVideo} from '../../index'
import stylesVideo from '../../backgroundVideo/styles.module.scss'
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import styles from './styles.module.scss'
import {useDispatch} from "react-redux";

const CardAsideBar = () => {
    const dispatch = useDispatch()

    const cityList = GetCityList();

    const removeCardAside = (city) => {
        dispatch({type: 'REMOVE_CITY', payload: city.id})
    }

    return (
        cityList &&
            cityList.map((city, index) => {
                console.log(cityList)
                return(
                    <div key={`key_${index}`} className={styles.cardsAside}>
                        <BackgroundVideo position={'absolute'} width={'100%'} radius={'14px'} className={stylesVideo.cardVideo}/>
                        <div className={styles.cardsAside__left}>
                            <div className={styles.cardsAside__title}>{city.name}</div>
                            <div className={styles.cardsAside__time}>{city.time} AM</div>
                            <div className={styles.cardsAside__description}>{city.description}</div>
                        </div>
                        <div className={styles.cardsAside__right}>
                            <div className={styles.cardsAside__degrees}>{Math.round(city.tempCurrent)}&deg;</div>
                            <div className={styles.cardsAside__coordinates}>{`H:${Math.round(city.tempHigh)}`}&deg;{` L:${Math.round(city.tempLow)}`}&deg;</div>
                        </div>
                        <IconButton style={{position: 'absolute', color: 'white', right: '0'}} aria-label="delete" onClick={(e) => {
                            e.stopPropagation()
                            removeCardAside(city)
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                )
            })

    )
}
export default CardAsideBar