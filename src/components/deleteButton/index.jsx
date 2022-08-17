import React, {useContext} from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {Context} from "../context";

const DeleteButton = () => {
    const {setCloseCards} = useContext(Context)

    return (
        <IconButton style={{position: 'absolute', color: 'white', right: '0'}} aria-label="delete" onClick={(e) => {
            e.stopPropagation()
            setCloseCards(true)
        }}>
            <DeleteIcon />
        </IconButton>
    )
}
export default DeleteButton