
import './App.scss';
import Forecast from "../Forecast/Forecast";
import Header from "../Header/header";
import AsideBar from "../AsideBar/AsideBar";
import WeatherToday from "../Weather-Today/Weather-Today";
import WeatherBoards from "../WeatherBoards/WeatherBoards";
import Popup from "../Popup/Popup";

function App() {
    function clicked () {

    }
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
                <AsideBar clicked={clicked}/>
            </div>
            {clicked ? <Popup/> : null}
        </div>
    )
}

export default App;
