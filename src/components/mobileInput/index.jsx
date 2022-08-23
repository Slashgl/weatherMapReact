import React, {useState} from 'react'
import Input from '../asideBar/popup/Input'
import List from '../asideBar/popup/List'
import CardAsideBar from "../asideBar/cardAsideBar"
import styles from './styles.module.scss'

const MobileInput = ({isPanel, cityList, setCityList, setData, translateTimeOfHourAM}) => {
    const [hidden, setHidden] = useState(false)

    return (
        isPanel ?
            <div className={styles.mobile}>
                <Input setCityList={setCityList}/>
                <List cityList={cityList}/>
                <CardAsideBar  setData={setData}
                               setHidden={setHidden}
                               translateTimeOfHourAM={translateTimeOfHourAM}
                />

            </div> : null
    )
}
export default MobileInput