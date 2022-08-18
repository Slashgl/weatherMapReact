import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../context';
import debounce from 'lodash.debounce'
import {weatherApi} from 'services'

const Input = ({className, placeholder, setIsModalActive}) => {
    const {setClickedInputMobile, setCloseWrapper, setOpenListCountryMobile} = useContext(Context)

    const [cityInput, setCityInput] = useState('')

    const updateInput = (e) => setCityInput(e?.target?.value);

    const searchCity = async (city) => {
        const citySuggestion = await weatherApi.getListCountry(city)

        console.log(citySuggestion)
    }

    useEffect(() => {
        if(cityInput) {
            searchCity(cityInput)
        }
    }, [cityInput])

    return (
        <label className={className}
               onClick={() => setClickedInputMobile(true)}>
            <input
                type='text'
                placeholder={placeholder}
                onClick={() => {
                    setIsModalActive(true)
                    setCloseWrapper(false)
                    setOpenListCountryMobile(true)

                }}
                onChange={debounce(updateInput, 500)}
            />
        </label>
    )
}

export default Input


