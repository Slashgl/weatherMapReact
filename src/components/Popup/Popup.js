import React from "react";
import './Popup.scss'

function Popup({active, setActive}) {
    return (
        <div className={active ? 'popup active' : 'popup'} onClick={() => setActive(false)}>
            <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                <div className="popup__close" onClick={() => setActive(false)}></div>
                <label className="popup__input">
                    <input className="popup__search" type="text"/>
                </label>
                <ul className="popup__results"></ul>
                <button type="button" className="popup__button">OK</button>
            </div>
        </div>
    )
}
export default Popup