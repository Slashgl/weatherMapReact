import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../context';
import debounce from 'lodash.debounce'
import {weatherApi} from "../../../services";

export const Input = ({className, placeholder}) => {
    const {setClickedInputMobile, setModalActive, setValueInput, setCloseWrapper, setOpenListCountryMobile} = useContext(Context)

    const [cityInput, setCityInput] = useState()

    const updateInput = (e) => setCityInput(e?.target?.value);

    const debounceOnChange = debounce(updateInput, 500)

    const searchCity = async (city) => {
        const citySuggestion = await weatherApi.getListCountry(city)

        console.log(citySuggestion)
    }

    useEffect(() => {
        searchCity()
    }, [cityInput])

    return (
        <label className={className}
               onClick={() => setClickedInputMobile(true)}>
            <input
                type='text'
                placeholder={placeholder}
                value={cityInput}
                onClick={() => {
                    setModalActive(true)
                    setCloseWrapper(false)
                    setOpenListCountryMobile(true)

                }}
                onChange={debounceOnChange}
            />
        </label>
    )
}



