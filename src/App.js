import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";

import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import CharactersId from "./pages/CharactersId";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Characters search={search} />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/character/:id" element={<CharactersId />} />
      </Routes>
    </Router>
  );
}

export default App;
