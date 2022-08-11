import React, {useContext} from 'react'
import {Context} from '../../context'


const List = ({api, classNameList, classNameItem, classNameName, classNameCountry}) => {
    const {clickedInputMobile, setSwitchingModal} = useContext(Context)

    return (
        <ul className={classNameList} style={{
            display: clickedInputMobile ? 'block' : null
        }}>
            {api && api.map(el => {
                return (
                    <li key={el.city} className={classNameItem} onClick={() => setSwitchingModal(true)}>
                        <div className={classNameName}>{el.city}</div>
                        <div className={classNameCountry}>{el.state}</div>
                    </li>
                )
            })}
        </ul>
    )
}

export default List