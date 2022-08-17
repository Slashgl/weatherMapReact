import React, {useContext, useEffect} from 'react'
import {Context} from '../../context'
import {apiGetCountry, apiWeatherCountry} from 'services'

const List = ({classNameList, classNameItem, classNameName, classNameCountry}) => {
    const {clickedInputMobile, valueInput, setCountry, data, setData, setNameCountry, nameCountry, country, setCardsOfMobileAside, setCloseWrapper} = useContext(Context)

    const getListCountry = () => {
        if(valueInput) {
            const api = apiGetCountry(valueInput, setData)
            api.then(res => {
                setData(res)
            })
        }
    }

    useEffect(() => {
        getListCountry()
    }, [valueInput, setData])

    const getCountryAndCoordinate = (el) => {
        apiWeatherCountry(el.lat, el.lon)
            .then(res => {
                setCountry((prev) => {
                    return [
                        ...prev,
                        res,
                    ]
                })
            })
    }

    return (
        <ul className={classNameList} style={{
            display: clickedInputMobile ? 'block' : null
        }}>
            {data &&
                data.map((el, index) => {
                return (
                    <li key={index} className={classNameItem} onClick={() => {
                        getCountryAndCoordinate(el, index)
                        setCardsOfMobileAside(true)
                        setCloseWrapper(true)
                    }}>
                        <div className={classNameName}>{el.name}</div>
                        <div className={classNameCountry}>{el.state}</div>
                    </li>
                )
            })}
        </ul>
    )
}

export default List