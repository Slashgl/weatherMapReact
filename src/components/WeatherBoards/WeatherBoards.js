import React from "react"
import logoUiIndex from '../../img/sun.max.fill.svg'
import logoSubtract from '../../img/Subtract.svg'
import logoVector from '../../img/Vector.svg'
import logoSunrise from '../../img/sunrise.fill.svg'
import logoWind from '../../img/wind.svg'
import logoCompass from '../../img/compass.svg'
import logoTemp from '../../img/thermometer.svg'
import logoHumidity from '../../img/humidity.svg'
import logoVisibility from '../../img/eye.fill.svg'

import './WeatherBoards.scss';

function WeatherBoards() {
    return(
        <div className='boards'>
            <div className='board'>
                <div className='board__item'>
                    <div className='board__title '>
                        <img className='logo' src={logoUiIndex} alt="img"/>
                        uv index
                    </div>
                    <div className='board__index'>12</div>
                    <div className='board__level'>Middle</div>
                    <div className='board__line'>
                        <img src={logoSubtract} alt="img"/>
                    </div>
                    <div className='board__description'>Middle for the rest of the day.</div>
                </div>
            </div>
            <div className='board'>
                <div className='board__item'>
                    <div className='board__title'>
                        <img className='logo' src={logoSunrise} alt="img"/>
                        sunrise
                    </div>
                    <div className='board__time'>11:28 AM</div>
                    <div className='board__line'>
                        <img className='board__vector' src={logoVector} alt="img"/>
                    </div>
                    <div className='board__description'>Sunrise: 9:45 pm</div>
                </div>
            </div>
            <div className='board'>
                <div className='board__item'>
                    <div className='board__title'>
                        <img className='logo' src={logoWind} alt="img"/>
                        Wind
                    </div>
                    <img className='board__compass' src={logoCompass} alt="img"/>
                </div>
            </div>
            <div className='board'>
                <div className='board__item'>
                    <div className='board__title'>
                        <img className='logo' src={logoTemp} alt="img"/>
                        feels like
                    </div>
                    <div className='board__degrees'>29°</div>
                    <div className='board__description'>Similar to the
                        actual
                        temperature</div>
                </div>
            </div>
            <div className='board'>
                <div className='board__item'>
                    <div className='board__title'>
                        <img className='logo' src={logoHumidity} alt="img"/>
                        humidity
                    </div>
                    <div className='board__percent'>54%</div>
                    <div className='board__level'>The dew point is
                        21° right now.</div>
                </div>
            </div>
            <div className='board'>
                <div className='board__item'>
                    <div className='board__title'>
                        <img className='logo' src={logoVisibility} alt="img"/>
                        visibility
                    </div>
                    <div className='board__visibility'>21 км</div>
                    <div className='board__description'>Visibility is good</div>
                </div>
            </div>

        </div>

    )
}
export default WeatherBoards;