import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from "./home.jsx";
import Details from "./Details.jsx";
import "./first.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}




