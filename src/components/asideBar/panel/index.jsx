import React from 'react'
import styles from './styles.module.scss'

const Panel = ({setPanel}) => {

   return (
       <div className={styles.panel}>
           <div className={styles.panel__wrapper}>
               <div className={styles.panel__btn} onClick={() => setPanel(true)}>
                   <div className={styles.panel__line}></div>
                   <div className={styles.panel__line}></div>
                   <div className={styles.panel__line}></div>
               </div>
           </div>
       </div>
   )
}

export default Panel