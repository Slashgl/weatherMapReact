import React, { useState } from 'react'
import Input from '../popup/Input'
import List from '../popup/List'
import CardAsideBar from '../cardAsideBar'
import styles from './styles.module.scss'

const MobileInput = ({
    isPanel,
    cityList,
    setCityList,
    setPanel,
    setIsHiddenMobileList,
    isHiddenMobileList,
}) => {
    const [iHidden, setIsHidden] = useState(false)

    return isPanel ? (
        <div className={styles.mobile}>
            <div className={styles.mobile__header}>
                <Input
                    setCityList={setCityList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isHiddenMobileList={isHiddenMobileList}
                />
            </div>
            <List
                cityList={cityList}
                isHidden={iHidden}
                setIsHidden={setIsHidden}
                isHiddenMobileList={isHiddenMobileList}
                setIsHiddenMobileList={setIsHiddenMobileList}
            />
            <CardAsideBar setPanel={setPanel} isPanel={isPanel} />
        </div>
    ) : null
}
export default MobileInput
