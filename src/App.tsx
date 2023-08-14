import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import RollDice from './screens/RollDice';
import NotFound from './screens/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roll-dice/:name" element={<RollDice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;