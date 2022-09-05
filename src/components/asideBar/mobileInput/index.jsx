import React, { useState } from 'react'
import { Button } from '@mui/material'
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
    const [isClickInput, setIsClickInput] = useState(false)

    return isPanel ? (
        <div className={styles.mobile}>
            <div className={styles.mobile__header}>
                <Input
                    setCityList={setCityList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isHiddenMobileList={isHiddenMobileList}
                    setIsClickInput={setIsClickInput}
                    isClickInput={isClickInput}
                />
                {isClickInput ? (
                    <Button
                        variant="outlined"
                        style={{
                            zIndex: 5,
                            height: '45px',
                            marginLeft: '15px',
                        }}
                        onClick={() => {
                            setIsHiddenMobileList(!isHiddenMobileList)
                            setIsClickInput(!isClickInput)
                        }}
                    >
                        Отмена
                    </Button>
                ) : null}
            </div>
            {
                <List
                    cityList={cityList}
                    isHidden={iHidden}
                    setIsHidden={setIsHidden}
                    isHiddenMobileList={isHiddenMobileList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isClickInput={isClickInput}
                    setIsClickInput={setIsClickInput}
                />
            }
            <CardAsideBar setPanel={setPanel} isPanel={isPanel} />
        </div>
    ) : null
}
export default MobileInput
