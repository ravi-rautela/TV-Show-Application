import "./App.css";
import Card from "./Components/CardList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import CardSum from "./Components/CardSum";

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/showSummery/:id" element={<CardSum/> } />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
