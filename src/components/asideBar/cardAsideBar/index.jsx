import React, {useContext, useEffect, useState} from 'react'
import {BackgroundVideo} from '../../index'
import {Context} from '../../context'
import stylesVideo from '../../backgroundVideo/styles.module.scss'
import DeleteButton from "../../deleteButton";
import {GetCityList} from "../../../store/selectors/CityList";

const CardAsideBar = ({className, classNameAsideLeft, classNameAsideTitle, classNameAsideTime,
                          classNameAsideDescription, classNameAsideRight, classNameAsideDegrees,classNameAsideCoordinates}) => {

    // const addInfoMainMenu = (el) => {
    //     setMainMenu(el)
    // }
    const [cityList, setCityList] = useState()

    useEffect(() => {
        setCityList(GetCityList())
        console.log(cityList)
    }, [])
    return (
        cityList &&
            cityList.map((city, index) => {

                return(
                    <div key={`key_${index}`} className={className}>
                        <BackgroundVideo position={'absolute'} width={'100%'} radius={'14px'} className={stylesVideo.cardVideo}/>
                        <div className={classNameAsideLeft}>
                            <div className={classNameAsideTitle}>{city.name}</div>
                            <div className={classNameAsideTime}>{city.time} AM</div>
                            <div className={classNameAsideDescription}>{city.description}</div>
                        </div>
                        <div className={classNameAsideRight}>
                            <div className={classNameAsideDegrees}>{Math.round(city.tempCurrent)}&deg;</div>
                            <div className={classNameAsideCoordinates}>{`H:${Math.round(city.tempHigh)}`}&deg;{` L:${Math.round(city.tempLow)}`}&deg;</div>
                        </div>
                        <DeleteButton/>
                    </div>
                )
            })

    )
}
export default CardAsideBar