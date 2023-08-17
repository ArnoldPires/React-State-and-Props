import Header from "./components/header";
import Player from "./components/player";
import Board from "./components/Board";
import './App.css';

function App() {
  return (
  <div>
    <Header />
    <Player whichPlayer='X'/>
    <Player whichPlayer='O'/>
    <Board/>
  </div>
  );
}

export default App;