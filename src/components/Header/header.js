import React from 'react';
import './header.scss';

function Header() {
    return(
        <div className='header'>
            <div className='header__title'>Minsk</div>
            <div className='header__degrees'>21°</div>
            <div className='header__description'>Partly Cloudy</div>
            <div className='header__coordinates'>H:29°  L:15°</div>
        </div>
    )
}
export default Header;