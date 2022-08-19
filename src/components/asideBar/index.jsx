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
            <CardAsideBar />
            <Popup isActive={isModalActive} setIsActive={setIsModalActive}/>
        </div>
    )
}
export default AsideBar