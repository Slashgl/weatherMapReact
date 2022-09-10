import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux'
import { deleteCity, GetCityList, fixActiveCity } from 'store'
import { DateFormat } from 'utils'
import BackgroundCard from './background'
import styles from './styles.module.scss'

const CardAsideBar = ({ setPanel, isPanel }) => {
    const cityList = GetCityList()
    const dispatch = useDispatch()

    const removeCardAside = (id) => dispatch(deleteCity(id))
    const activeCity = (city) => dispatch(fixActiveCity(city))
    const setHidingAsideBar = () => setPanel(!isPanel)

    const removeCards = (e, city) => {
        e.stopPropagation()
        removeCardAside(city.id)
    }

    const handleClick = (city) => {
        setHidingAsideBar()
        activeCity(city)
    }

    return (
        cityList &&
        cityList.map((city, index) => (
            <div
                key={`key_${index}`}
                className={styles.cardsAside}
                onClick={() => handleClick(city)}
            >
                <BackgroundCard city={city} />

                <div className={styles.cardsAside__left}>
                    <div className={styles.cardsAside__title}>
                        {index === 0 ? city.geoName : city.name}
                    </div>
                    <div className={styles.cardsAside__time}>
                        {index === 0
                            ? city.ipName
                            : DateFormat.formatTime(city.time)}
                    </div>
                    <div className={styles.cardsAside__description}>
                        {city.description}
                    </div>
                </div>
                <div className={styles.cardsAside__right}>
                    <div className={styles.cardsAside__degrees}>
                        {Math.round(city.tempCurrent)}&deg;
                    </div>
                    <div className={styles.cardsAside__coordinates}>
                        {`H:${Math.round(city.tempHigh)}`}&deg;
                        {` L:${Math.round(city.tempLow)}`}&deg;
                    </div>
                </div>
                {index === 0 ? null : (
                    <IconButton
                        style={{
                            position: 'absolute',
                            color: 'white',
                            right: '0',
                        }}
                        aria-label="delete"
                        onClick={(e) => removeCards(e, city)}
                    >
                        <DeleteIcon />
                    </IconButton>
                )}
            </div>
        ))
    )
}
export default CardAsideBar
