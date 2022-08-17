import React, {useContext} from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {Context} from "../context";

const DeleteButton = () => {
    const {setCloseCards, country, id, setCountry} = useContext(Context)

    console.log(country)
    return (
        <IconButton style={{position: 'absolute', color: 'white', right: '0'}} aria-label="delete" onClick={(e) => {
            e.stopPropagation()
            setCloseCards(true)
            setCountry(country.filter((_, index) => index === id))
        }}>
            <DeleteIcon />
        </IconButton>
    )
}
export default DeleteButton