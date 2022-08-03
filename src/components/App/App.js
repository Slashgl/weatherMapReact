
import './App.scss';
import Forecast from "../Forecast/Forecast";
import Header from "../Header/header";
import AsideBar from "../AsideBar/AsideBar";
import WeatherToday from "../Weather-Today/Weather-Today";
import WeatherBoards from "../WeatherBoards/WeatherBoards";
import Popup from "../Popup/Popup";
import {useState} from "react";

function App() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className='App'>
            <div className='content-left'>
                <Header/>
                <div className='content-left__table'>
                    <Forecast/>
                    <div className='content-right__table'>
                        <WeatherToday/>
                        <WeatherBoards/>
                    </div>
                </div>
            </div>
            <div className='content-right'>
                <AsideBar setModalActive={setModalActive}/>
            </div>
            <Popup active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default App;
