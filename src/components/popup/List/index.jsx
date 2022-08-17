import React, {useContext, useEffect} from 'react'
import {Context} from '../../context'
import {weatherApi} from "../../../services";
import {setCity} from "../../../store/Reducers/cityList";
// import {apiGetCountry, apiWeatherCountry} from 'src/ser'

const List = ({classNameList, classNameItem, classNameName, classNameCountry}) => {
    const {clickedInputMobile, valueInput, setCountry, data, setData, setCardsOfMobileAside, setCloseWrapper, setId} = useContext(Context)

    // useEffect(() => {
    //     searchCity()
    // },[])
    //
    // const getListCountry = () => {
    //     if(valueInput) {
    //         const api = apiGetCountry(valueInput, setData)
    //         api.then(res => {
    //             setData(res)
    //         })
    //     }
    // }
    //

    //
    // const getCountryAndCoordinate = (el) => {
    //     apiWeatherCountry(el.lat, el.lon)
    //         .then(res => {
    //             setCountry((prev) => {
    //                 return [
    //                     ...prev,
    //                     res,
    //                 ]
    //             })
    //         })
    // }

    return (
        <ul className={classNameList} style={{
            display: clickedInputMobile ? 'block' : null
        }}>
            {data &&
                data.map((el, index) => {

                return (
                    <li key={index} className={classNameItem} onClick={() => {
                        // getCountryAndCoordinate(el, index)
                        setCardsOfMobileAside(true)
                        setCloseWrapper(true)
                        setId(index)
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