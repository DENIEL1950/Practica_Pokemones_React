import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Pokemon from './components/paginas/Pokemon';
import Items from './components/paginas/Items';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/pokemon' element={<Pokemon />} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
