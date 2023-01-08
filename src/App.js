import "./App.css";
import HomeComponent from "./components/HomeComponent";
import Quizcomponent from "./components/Quizcomponent";
import Resultcomponent from "./components/Resultcomponent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<Quizcomponent />} />
        <Route path="/result" element={<Resultcomponent />} />
      </Routes>
    </div>
  );
}

export default App;