import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <CountriesList />
        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
