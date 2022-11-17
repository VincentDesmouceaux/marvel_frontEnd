import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import CharactersId from "./pages/CharactersId";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/character/:id" element={<CharactersId />} />
      </Routes>
    </Router>
  );
}

export default App;
