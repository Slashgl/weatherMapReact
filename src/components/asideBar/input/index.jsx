import React, {useContext} from 'react'
import {Context} from '../../context';
import debounce from 'lodash.debounce'

export const Input = ({className, placeholder}) => {
    const {setClickedInputMobile, setModalActive, setValueInput} = useContext(Context)

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
                }}
                onChange={debounceOnChange}
            />
        </label>
    )
}



