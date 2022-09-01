import React, { useState } from 'react'
import Input from '../popup/Input'
import List from '../popup/List'
import CardAsideBar from '../cardAsideBar'
import CloseButton from './closeButton'
import styles from './styles.module.scss'

const MobileInput = ({
    isPanel,
    cityList,
    setCityList,
    setPanel,
}) => {
    const [iHidden, setIsHidden] = useState(false)

    return isPanel ? (
        <div className={styles.mobile}>
            <div className={styles.mobile__header}>
                <Input setCityList={setCityList} setIsHidden={setIsHidden} />
                <CloseButton
                    setIsHidden={setIsHidden}
                    setPanel={setPanel}
                />
            </div>
            <List
                cityList={cityList}
                isHidden={iHidden}
                setIsHidden={setIsHidden}
            />
            <CardAsideBar />
        </div>
    ) : null
}
export default MobileInput
