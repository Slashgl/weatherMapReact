import React, {useContext} from 'react'
import List from './List'
import {Input} from '../asideBar/input'
import styles from './styles.module.scss'
import {Context} from '../context'

const Popup = ({active, setActive}) => {
    let {setClickOK,clickOK} = useContext(Context)

    return (
        active ?
            <div className={styles.popup} onClick={() => setActive(!clickOK)}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.popup__close} onClick={() => {
                        setActive(false)
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