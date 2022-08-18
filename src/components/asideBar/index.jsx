import React, {useState} from 'react'
import Input from './input'
import Popup from './popup'
import styles from './styles.module.scss'
import CardAsideBar from "./cardAsideBar";

const AsideBar = () => {
    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <div className={styles.aside}>
            <Input
                className={styles.aside__input}
                placeholder={`Search for a city or airport`}
                setIsModalActive={setIsModalActive}
            />
            {/*<CardAsideBar className={styles.aside__cards}*/}
            {/*              classNameAsideLeft={styles.aside__left}*/}
            {/*              classNameAsideTitle={styles.aside__title}*/}
            {/*              classNameAsideTime={styles.aside__time}*/}
            {/*              classNameAsideDescription={styles.aside__description}*/}
            {/*              classNameAsideRight={styles.aside__right}*/}
            {/*              classNameAsideDegrees={styles.aside__degrees}*/}
            {/*              classNameAsideCoordinates={styles.aside__coordinates}*/}
            {/*              classNameBtnClose={styles.aside__btnClose}*/}
            {/*/>*/}
            <Popup isActive={isModalActive} setIsActive={setIsModalActive}/>
        </div>
    )
}
export default AsideBar