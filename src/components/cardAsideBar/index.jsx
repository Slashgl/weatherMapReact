import React, {useContext} from 'react'
import {BackgroundVideo} from '../index'
import {Context} from '../context'
import stylesVideo from '../backgroundVideo/styles.module.scss'
import DeleteButton from "../deleteButton";

const CardAsideBar = ({className, classNameAsideLeft, classNameAsideTitle, classNameAsideTime,
                          classNameAsideDescription, classNameAsideRight, classNameAsideDegrees,classNameAsideCoordinates}) => {

    const {country, clickOK, setMainMenu, translateTimeOfHourAM, addCardOfMobileAside, setSwitchingModalMobile} = useContext(Context)

    const addInfoMainMenu = (el) => {
        setMainMenu(el)
    }
    return (

        clickOK || addCardOfMobileAside ?
            country &&
            country.map((el, index) => {

                return(
                    <div key={index} className={className}
                         onClick={() => {
                             addInfoMainMenu(el)
                             setSwitchingModalMobile(false)
                         }}
                    >
                        <BackgroundVideo position={'absolute'} width={'100%'} radius={'14px'} className={stylesVideo.cardVideo}/>
                        <div className={classNameAsideLeft}>
                            <div className={classNameAsideTitle}></div>
                            <div className={classNameAsideTime}>{translateTimeOfHourAM(el.current.dt)} AM</div>
                            <div className={classNameAsideDescription}>{el.current.weather.map(info => info.description)}</div>
                        </div>
                        <div className={classNameAsideRight}>
                            <div className={classNameAsideDegrees}>{Math.round(el.current.temp)}&deg;</div>
                            <div className={classNameAsideCoordinates}>{`H:${Math.round(el.lat)}`}&deg;{` L:${Math.round(el.lon)}`}&deg;</div>
                        </div>
                        <DeleteButton/>
                    </div>
                )
            }) : null

    )
}
export default CardAsideBar