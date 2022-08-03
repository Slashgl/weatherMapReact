import React from "react";
import './AsideBar.scss';

function AsideBar({clicked}) {
    return(
        <div className='aside'>
            <input type='text' placeholder='Search for a city or airport' onClick={clicked}/>
            <div className='aside__myLocation'>
                <div className='aside__left'>
                    <div className='aside__title'>My location</div>
                    <div className='aside__city'>Minsk</div>
                    <div className='aside__description'>Partly Cloudy</div>
                </div>
                <div className='aside__right'>
                    <div className='aside__degrees'>21°</div>
                    <div className='aside__coordinates'>H:29°  L:15°</div>
                </div>
            </div>
        </div>
    )
}
export default AsideBar;