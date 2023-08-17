import Header from "./components/header";
import Player from "./components/player";
import './App.css';

function App() {
  return (
  <div>
    <Header />
    <Player whichPlayer='X'/>
    <Player whichPlayer='O'/>
  </div>
  );
}

export default App;