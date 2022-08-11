import React, {useContext} from 'react'
import {Context} from "../../context";

export const Input = ({className, placeholder}) => {
    const {setClickedInputMobile, setModalActive} = useContext(Context)

    return (
        <label className={className}
               onClick={() => setClickedInputMobile(true)}>
            <input
                type='text'
                placeholder={placeholder}
                onClick={() => setModalActive(true)}/>
        </label>
    )
}



