import React, { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'
import { weatherApi } from 'services'
import styles from './styles.module.scss'

const Input = ({ setCityList, setIsHiddenMobileList, isHiddenMobileList, setIsClickInput, isClickInput }) => {
    const [cityInput, setCityInput] = useState('')

    const updateInput = (e) => setCityInput(e?.target?.value)

    const searchCity = async (city) => {
        if (cityInput) {
            try {
                const citySuggestion = await weatherApi.getListCountry(city)
                setCityList(citySuggestion.data)
            } catch (e) {
                console.log(e)
            }
        }
    }

    const setHidingMobileList = () => {
        setIsHiddenMobileList(!isHiddenMobileList)
    }

    const setClickInput = () => {
        setIsClickInput(!isClickInput)
    }

    useEffect(() => {
        searchCity(cityInput)
    }, [cityInput])

    return (
        <label className={styles.input}>
            <input
                type="text"
                onChange={debounce(updateInput, 500)}
                onClick={() => {
                    setHidingMobileList()
                    setClickInput()
                }}
            />
        </label>
    )
}
export default Input
