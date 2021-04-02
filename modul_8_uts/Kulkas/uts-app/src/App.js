import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Kulkas from "./container/Kulkas/Kulkas";
import Keranjang from "./container/Kulkas/Keranjang";

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
            <Link to="/list-product"><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/keranjang"><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <center><h2>Selamat Datang di Online Shop Lemari Es!</h2></center>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <center><h2>Biodata</h2>
      <table border="1" cellpadding="10">
        <tr>
            <td>Nama : </td>
            <td>Faizatul Fadilah</td>
        </tr>
        <tr>
            <td>Tempat Lahir:</td>
            <td>Sumenep</td>
        </tr>
        <tr>
            <td>Tanggal Lahir:</td>
            <td>22 Januari 2000</td>
        </tr>
        <tr>
            <td>Alamat:</td>
            <td>Jalan Urip Sumoharjo Gg. Pusaka No 17 Pabian Sumenep</td>
        </tr>
        <tr>
            <td>Kelas:</td>
            <td>TI-3E</td>
        </tr>
        <tr>
            <td>Jurusan:</td>
            <td>Teknologi Informasi</td>
        </tr>
    </table>
    </center>
    </div>
  );
}

function Products() {
  return (
    <div>
      <Kulkas />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;
