import React, {useContext} from 'react'
import './styles.module.scss'
import styles from './styles.module.scss'
import {Context} from "../context";

const Hamburger = () => {
    const {setSwitchingModal} = useContext(Context)

   return (
       <div className={styles.panel}>
           <div className={styles.panel__wrapper}>
               <div className={styles.panel__btn}
                    onClick={() => setSwitchingModal(true)}
               >
                   <div className={styles.panel__line}></div>
                   <div className={styles.panel__line}></div>
                   <div className={styles.panel__line}></div>
               </div>
           </div>
       </div>
   )
}

export default Hamburger