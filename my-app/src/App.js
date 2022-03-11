import logo from './logo.svg';
import './App.css';

import NavBar from "./Components/NavBar";
import Prices from "./Components/Prices";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <Prices/>
      {/* <img className="titleImage" src="https://powdercoatingnashville.com/wp-content/uploads/PTS-lores-6468.jpg"/> */}
      </header>
    </div>
  );
}

export default App;
