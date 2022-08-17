import React from 'react'
import {Input} from 'components'
import styles from './styles.module.scss'
import CardAsideBar from "../cardAsideBar";

const AsideBar = () => {

    return (
        <div className={styles.aside}>
            <Input
                className={styles.aside__input}
                placeholder={`Search for a city or airport`}
            />
            <CardAsideBar className={styles.aside__cards}
                          classNameAsideLeft={styles.aside__left}
                          classNameAsideTitle={styles.aside__title}
                          classNameAsideTime={styles.aside__time}
                          classNameAsideDescription={styles.aside__description}
                          classNameAsideRight={styles.aside__right}
                          classNameAsideDegrees={styles.aside__degrees}
                          classNameAsideCoordinates={styles.aside__coordinates}
                          classNameBtnClose={styles.aside__btnClose}
            />
        </div>
    )
}
export default AsideBar