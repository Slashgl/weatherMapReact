import React, {useState} from 'react'
import Input from './input'
import Popup from './popup'
import styles from './styles.module.scss'
import CardAsideBar from "./cardAsideBar";

const AsideBar = ({setData, translateTimeOfHourAM, setCityList, cityList,
                      setActiveMobileInput, setGeolocationData, geolocationData,
                      geoFindMe,
                  }) => {
    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <div className={styles.aside}>
            <Input
                className={styles.aside__input}
                placeholder={`Search for a city or airport`}
                setIsModalActive={setIsModalActive}
            />
            <CardAsideBar setGeolocationData={setGeolocationData}
                          translateTimeOfHourAM={translateTimeOfHourAM}
                          setData={setData}
                          geolocationData={geolocationData}
                          geoFindMe={geoFindMe}
            />
            <Popup
                cityList={cityList}
                setCityList={setCityList}
                isActive={isModalActive}
                setIsActive={setIsModalActive}
                setActiveMobileInput={setActiveMobileInput}
            />
        </div>
    )
}
export default AsideBar