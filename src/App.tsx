import React, {useState} from 'react';
import logo from './img/office.png';
import './css/App.css';
import ParticipationForm from "./Modal/participationForm";

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
        <div className="columns-container">
          <div className="left-column">
            <h1>Мастер-классы<br></br> от Create Studio</h1>
            <button
                type="submit"
                className="button"
                onClick={() => setModalActive(true)}
            >
              Записаться
            </button>
          </div>
          <div className="right-column">
            <img
                src={logo}
                alt="Фотография офиса"
                width="552"
                height="376">
            </img>
          </div>
          <ParticipationForm active={modalActive} setActive={setModalActive}/>
        </div>
    </div>
  );
}

export default App;
