import React from 'react'
import { Button } from '@mui/material'
import styles from './styles.module.scss'

const CloseButton = ({ setIsHidden, setPanel }) => {
    return (
        <Button
            style={{ height: '45px', marginLeft: '25px' }}
            className={styles.close}
            variant="outlined"
            onClick={() => {
                setIsHidden(false)
                setPanel(false)
            }}
        >
            Отмена
        </Button>
    )
}
export default CloseButton
