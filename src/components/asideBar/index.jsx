import React, {useContext} from 'react'
import {Context} from '../context'
import {countryApi} from 'services'
import {Input, List} from 'components'
import styles from './styles.module.scss'
import CardAsideBar from "../cardAsideBar";

const AsideBar = () => {
    const {switchingModal, clickedInputMobile} = useContext(Context)

    return (
        <div className={styles.aside} style={{
            display: switchingModal ? 'block' : null
        }}>
            <Input
                className={styles.aside__input}
                placeholder={`Search for a city or airport`}
            />
            <div className={styles.aside__wrapper} style={{
                opacity: clickedInputMobile ? '1' : null
            }}>
                <List
                    classNameList={styles.aside__results}
                    classNameItem={styles.aside__item}
                    classNameName={styles.aside__name}
                    classNameCountry={styles.aside__country}
                />
            </div>

            <div className={styles.aside__inner}>
                <CardAsideBar className={styles.aside__myLocation}
                              classNameAsideLeft={styles.aside__left}
                              classNameAsideTitle={styles.aside__title}
                              classNameAsideTime={styles.aside__time}
                              classNameAsideDescription={styles.aside__description}
                              classNameAsideRight={styles.aside__right}
                              classNameAsideDegrees={styles.aside__degrees}
                              classNameAsideCoordinates={styles.aside__coordinates}
                />
            </div>
        </div>
    )
}
export default AsideBar