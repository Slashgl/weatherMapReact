import React from 'react'
import Input from '../asideBar/popup/Input'
import List from '../asideBar/popup/List'
import CardAsideBar from "../asideBar/cardAsideBar"
import styles from './styles.module.scss'

const MobileInput = ({isPanel, cityList, setCityList, isActiveInput}) => {


    return (
        isPanel ?
            <div className={styles.mobile}>
                    <Input setCityList={setCityList}/>
                {
                    isActiveInput ? <List cityList={cityList}/> : null
                }
                    <CardAsideBar className={styles.mobile__cards}
                                  classNameAsideLeft={styles.mobile__left}
                                  classNameAsideTitle={styles.mobile__title}
                                  classNameAsideTime={styles.mobile__time}
                                  classNameAsideDescription={styles.mobile__description}
                                  classNameAsideRight={styles.mobile__right}
                                  classNameAsideDegrees={styles.mobile__degrees}
                                  classNameAsideCoordinates={styles.mobile__coordinates}
                                  classNameBtnClose={styles.mobile__btnClose}
                    />

            </div> : null
    )
}
export default MobileInput