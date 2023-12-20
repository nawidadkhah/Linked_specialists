import { Auth } from './Pages/Auth/Auth'
import { Home } from './Pages/Home/Home'
import { SearchPage } from "./Pages/SearchPage/SearchPage";
import { Reports } from './Pages/Reports/Reports';
import { SpecialWord } from './Pages/SpecialWord/SpecialWord';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Search" element={<SearchPage />}></Route>
          <Route path="/Reports" element={<Reports />}></Route>
          <Route path="/Special-words" element={<SpecialWord />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
