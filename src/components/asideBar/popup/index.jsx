import React, {useContext} from 'react'
import List from './List'
import Input from '../input'
import styles from './styles.module.scss'
import {Context} from '../../context'

const Popup = ({isActive, setIsActive}) => {
    let {setClickOK,clickOK} = useContext(Context)

    return (
        isActive ?
            <div className={styles.popup} onClick={() => setIsActive(!clickOK)}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.popup__close} onClick={() => {
                        setIsActive(false)
                    }}></div>
                    <Input className={styles.popup__input}/>
                        <List
                            classNameList={styles.popup__results}
                            classNameItem={styles.popup__item}
                            classNameName={styles.popup__name}
                            classNameCountry={styles.popup__country}

                        />
                    <button type='button' className={styles.popup__button} onClick={() => setClickOK(true)}>OK</button>
                </div>
            </div>
            : null
    )
}
export default Popup