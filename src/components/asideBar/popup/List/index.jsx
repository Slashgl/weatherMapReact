import React, {useContext, useEffect} from 'react'
import {Context} from '../../../context'
import {weatherApi} from "../../../../services";
import {setCity} from "../../../../store/Reducers/cityList";
// import {apiGetCountry, apiWeatherCountry} from 'src/ser'

const List = ({classNameList, classNameItem, classNameName, classNameCountry}) => {
    const {clickedInputMobile, valueInput, setCountry, data, setData, setCardsOfMobileAside, setCloseWrapper, setId} = useContext(Context)

    return (
        <ul className={classNameList} style={{
            display: clickedInputMobile ? 'block' : null
        }}>
            {data &&
                data.map((el, index) => (

                    <li key={index} className={classNameItem} onClick={() => {

                        setCardsOfMobileAside(true)
                        setCloseWrapper(true)
                        setId(index)
                    }}>
                        <div className={classNameName}>{el.name}</div>
                        <div className={classNameCountry}>{el.state}</div>
                    </li>
                ))}
        </ul>
    )
}

export default List