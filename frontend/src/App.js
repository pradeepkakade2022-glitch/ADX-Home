import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LetterPage from "./pages/LetterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter" element={<LetterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
