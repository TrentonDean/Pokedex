import './App.css';
import PokemonInfo from './components/PokemonInfo';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Search from './components/Search';
import Prank from './components/Prank'
import Mewthree from './components/Mewthree';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/pokeinfo/:id' element={<PokemonInfo/>}/>
          <Route path='/' element={<Search/>} default />
          <Route path='/prank' element={<Prank/>} />
          <Route path='/mewthree' element={<Mewthree/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;