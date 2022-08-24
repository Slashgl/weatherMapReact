import React, {useState} from 'react'
import Input from '../asideBar/popup/Input'
import List from '../asideBar/popup/List'
import CardAsideBar from "../asideBar/cardAsideBar"
import CloseButton from './closeButton'
import styles from './styles.module.scss'

const MobileInput = ({isPanel, cityList, setCityList, translateTimeOfHourAM, setPanel}) => {
    const [iHidden, setIsHidden] = useState(false)

    return (
            <div className={styles.mobile} style={{display: isPanel ? 'block': 'none'}}>
                <div className={styles.mobile__header}>
                    <Input setCityList={setCityList} setIsHidden={setIsHidden}/>
                    <CloseButton setIsHidden={setIsHidden} setPanel={setPanel}/>
                </div>
                <List cityList={cityList} isHidden={iHidden} setIsHidden={setIsHidden}/>
                <CardAsideBar translateTimeOfHourAM={translateTimeOfHourAM}/>
            </div>
    )
}
export default MobileInput