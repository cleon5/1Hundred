import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import InfoPelicula from './Pages/InfoPelicula';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/Pelicula/:id" element={<InfoPelicula/>}></Route>
        <Route path="/login/" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
