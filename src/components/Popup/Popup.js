import React from "react";
import './Popup.scss'

function Popup() {
    return (
        <div className="popup">
            <div className="popup__content ">
                <div className="popup__close"></div>
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