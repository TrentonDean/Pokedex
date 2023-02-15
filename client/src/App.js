import './App.css';
import PokemonInfo from './components/PokemonInfo';
import {Route, BrowserRouter, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonInfo/>} default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;