import React from 'react'
import styles from './styles.module.scss'

const Input = ({ setIsModalActive }) => {
    const openPopup = () => {
        setIsModalActive(true)
    }

    return (
        <label className={styles.input}>
            <input
                type="text"
                placeholder={`Search for a city or airport`}
                onClick={() => {
                    openPopup()
                }}
            />
        </label>
    )
}

export default Input
