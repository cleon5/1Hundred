import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import InfoPelicula from './Pages/InfoPelicula';
import Login from './Pages/Login';
import InfoMovie from './Pages/InfoMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/h" element={<Home2 />} exact></Route>
        <Route path="/Pelicula/:id" element={<InfoMovie/>}></Route>
        <Route path="/login/" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
