import Game from './pages/game';
import Authentification from './pages/authentification';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Authentification />} />
          <Route path="/game" element={ <Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
