import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Services from "./pages/Services"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/servicios' element={<Services />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
