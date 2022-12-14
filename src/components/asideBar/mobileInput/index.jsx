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
    setIsClickInput,
    isClickInput,
}) => {
    const [iHidden, setIsHidden] = useState(false)

    const handlerClick = () => {
        setIsHiddenMobileList(!isHiddenMobileList)
        setIsClickInput(!isClickInput)
    }

    return (
        <div className={styles.mobile}>
            <div className={styles.mobile__header}>
                <Input
                    setCityList={setCityList}
                    setIsHiddenMobileList={setIsHiddenMobileList}
                    isHiddenMobileList={isHiddenMobileList}
                    setIsClickInput={setIsClickInput}
                    isClickInput={isClickInput}
                />
                {isClickInput && (
                    <Button
                        variant="outlined"
                        style={{
                            zIndex: 5,
                            height: '45px',
                            marginLeft: '15px',
                        }}
                        onClick={() => handlerClick()}
                    >
                        Cancel
                    </Button>
                )}
            </div>

            <List
                cityList={cityList}
                isHidden={iHidden}
                setIsHidden={setIsHidden}
                isHiddenMobileList={isHiddenMobileList}
                setIsHiddenMobileList={setIsHiddenMobileList}
                isClickInput={isClickInput}
                setIsClickInput={setIsClickInput}
            />

            <CardAsideBar setPanel={setPanel} isPanel={isPanel} />
        </div>
    )
}
export default MobileInput
