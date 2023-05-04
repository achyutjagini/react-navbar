import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navbar />}></Route>

        </Routes>
      </BrowserRouter >

      {/*  <Navbar /> */}

    </div >
  );
}

export default App;
