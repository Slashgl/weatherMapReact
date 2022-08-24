import React from 'react'
import {useDispatch} from "react-redux"
import {GetCityList} from "../../../store/selectors/CityList"
import BackgroundVideo from '../../mainMenu/backgroundVideo'
import {setActiveIndex, deleteCity} from "../../../store/reducers/CityList"
import stylesVideo from '../../mainMenu/backgroundVideo/styles.module.scss'
import styles from './styles.module.scss'
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"

const CardAsideBar = ({translateTimeOfHourAM}) => {

    const cityList = GetCityList()
    const dispatch = useDispatch()

    const removeCardAside = (id) => {
        dispatch(deleteCity(id))
    }

    const activeIndexData = (index) => {
        dispatch(setActiveIndex(index))
    }

    return (
        <>
            {
                cityList?.map((city, index) => (
                    <div key={`key_${index}`} className={styles.cardsAside} onClick={() => {
                        activeIndexData(index)

                    }}>
                        <BackgroundVideo position={'absolute'} width={'100%'} radius={'14px'} className={stylesVideo.cardVideo} city={city}/>

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
                ))
            }
        </>
    )
}
export default CardAsideBar