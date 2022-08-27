import React from 'react'
import { Button } from '@mui/material'

const CloseButton = ({ setIsHidden, setPanel }) => {
    return (
        <Button
            style={{ height: '45px', marginLeft: '25px' }}
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
