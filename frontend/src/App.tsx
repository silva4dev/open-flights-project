import { Routes, Route } from "react-router-dom";
import { Airlines } from "./components/Airlines";
import { Airline } from "./components/Airline";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Airlines />} />
      <Route path="/airlines/:slug" element={<Airline />} />
    </Routes>
  );
}

export default App;
