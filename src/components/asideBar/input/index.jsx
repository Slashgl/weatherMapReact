import React, {useContext} from 'react'
import {Context} from '../../context';
import debounce from 'lodash.debounce'

export const Input = ({className, placeholder}) => {
    const {setClickedInputMobile, setModalActive, setValueInput, setCloseWrapper, setOpenListCountryMobile} = useContext(Context)

    const updateInput = (e) => setValueInput(e?.target?.value);

    const debounceOnChange = debounce(updateInput, 500)

    return (
        <label className={className}
               onClick={() => setClickedInputMobile(true)}>
            <input
                type='text'
                placeholder={placeholder}
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



