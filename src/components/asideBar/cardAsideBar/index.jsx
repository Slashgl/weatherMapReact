import React from 'react'
import dayjs from 'dayjs'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux'
import { setActiveIndex, deleteCity, GetCityList } from 'store'
import BackgroundCard from '../backgroundCard'
import styles from './styles.module.scss'

const CardAsideBar = ({ setPanel, isPanel }) => {
    const defaultData = GetCityList()

    const dispatch = useDispatch()

    const removeCardAside = (id) => {
        dispatch(deleteCity(id))
    }

    const activeIndexData = (index) => {
        dispatch(setActiveIndex(index))
    }

    const setHidingAsideBar = () => {
        setPanel(!isPanel)
    }

    return (
        <>
            {defaultData?.map((city, index) => (
                <div
                    key={`key_${index}`}
                    className={styles.cardsAside}
                    onClick={() => {
                        activeIndexData(index)
                        setHidingAsideBar()
                    }}
                >
                    <BackgroundCard city={city} />

                    <div className={styles.cardsAside__left}>
                        <div className={styles.cardsAside__title}>
                            {index === 0 ? city.geoName : city.name}
                        </div>
                        <div className={styles.cardsAside__time}>
                            {index === 0
                                ? city.ipName
                                : dayjs.unix(city.time).format('hh:mm A')}
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
                            onClick={(e) => {
                                e.stopPropagation()
                                removeCardAside(city.id)
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}
                </div>
            ))}
        </>
    )
}
export default CardAsideBar
