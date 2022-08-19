import React from 'react'

const Input = ({className, placeholder, setIsModalActive}) => {

    const openPopup = () => {
        setIsModalActive(true)
    }

    return (
        <label className={className}>
            <input
                type='text'
                placeholder={placeholder}
                onClick={() => {
                    openPopup()
                }}
            />
        </label>
    )
}

export default Input


