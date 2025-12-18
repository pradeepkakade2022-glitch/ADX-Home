import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
