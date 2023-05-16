import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";
import InfoPelicula from "./Pages/InfoPelicula";
import Login from "./Pages/Login";
import InfoMovie from "./Pages/InfoMovie";
import {ContexAuth} from "./Services/ContexAuth";
import InfoSerie from "./Pages/InfoSerie";

function App() {
  return (
    <BrowserRouter>
      <ContexAuth >
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/h" element={<Home2 />} exact></Route>
          <Route path="/Pelicula/:id" element={<InfoMovie />}></Route>
          <Route path="/Serie/:id" element={<InfoSerie />}></Route>
          <Route path="/login/" element={<Login />}></Route>
        </Routes>
      </ContexAuth>
    </BrowserRouter>
  );
}

export default App;
