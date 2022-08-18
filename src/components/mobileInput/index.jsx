// import React, {useContext} from 'react'
// import {Context} from '../context'
// import {Input, List} from 'components'
// import CardAsideBar from "../asideBar/cardAsideBar";
// import styles from './styles.module.scss'
//
// const MobileInput = () => {
//     const {openListCountryMobile, closeWrapper, switchingModalMobile, closeCards} = useContext(Context)
//
//     return (
//         switchingModalMobile ?
//             <div className={styles.mobile}>
//                 <Input className={styles.mobile__input}/>
//
//                 {openListCountryMobile ?
//                     <div className={styles.mobile__wrapper} style={{
//                         display : closeWrapper ? 'none' : null
//                     }}>
//
//                         <List
//                             classNameList={styles.mobile__results}
//                             classNameItem={styles.mobile__item}
//                             classNameName={styles.mobile__name}
//                             classNameCountry={styles.mobile__country}
//
//                         />
//                     </div> : null
//                 }
//
//                     <CardAsideBar className={styles.mobile__cards}
//                                   classNameAsideLeft={styles.mobile__left}
//                                   classNameAsideTitle={styles.mobile__title}
//                                   classNameAsideTime={styles.mobile__time}
//                                   classNameAsideDescription={styles.mobile__description}
//                                   classNameAsideRight={styles.mobile__right}
//                                   classNameAsideDegrees={styles.mobile__degrees}
//                                   classNameAsideCoordinates={styles.mobile__coordinates}
//                                   classNameBtnClose={styles.mobile__btnClose}
//                     />
//
//             </div> : null
//     )
// }
// export default MobileInput