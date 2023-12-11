import { Auth } from './Pages/Auth/Auth'
import { Home } from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/home" element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
