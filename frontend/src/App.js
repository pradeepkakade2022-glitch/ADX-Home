import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LetterPage from "./pages/LetterPage";
import AdxPromisePage from "./pages/AdxPromisePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter" element={<LetterPage />} />
          <Route path="/adx-promise" element={<AdxPromisePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
