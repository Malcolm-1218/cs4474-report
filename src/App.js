import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { ExecDesc } from './components/ExecDesc';
import { Routes, Route } from "react-router-dom";
import { Intro } from './components/Intro';
import { NavMap } from './components/NavMap';
import { Principles } from './components/Principles';
import { Evaluation } from './components/Evaluation';
import { Recommend } from './components/Recommend';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Executive-Level-Description" element={<ExecDesc />} />
        <Route path="/Navigational-Map" element={<NavMap />} />
        <Route path="/Design-Principles" element={<Principles />} />
        <Route path="/Evaluation" element={<Evaluation/>} />
        <Route path="/Recommendations" element={<Recommend />} />
        <Route path="/AboutUs" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
