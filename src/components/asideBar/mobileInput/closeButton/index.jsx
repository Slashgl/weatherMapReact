import React from 'react'
import { Button } from '@mui/material'

const CloseButton = ({ setIsHidden, setPanel, setIsClearInput }) => {
    const addScrollBody = () => {
        return (document.body.style.overflowY = 'visible')
    }

    return (
        <Button
            style={{ height: '45px', marginLeft: '25px' }}
            variant="outlined"
            onClick={() => {
                setIsHidden(false)
                setPanel(false)
                addScrollBody()
                setIsClearInput(true)
            }}
        >
            Отмена
        </Button>
    )
}
export default CloseButton
