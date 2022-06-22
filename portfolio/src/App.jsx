import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./componentes/index/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>        
      </Routes>
    </Router>    
  );
}

export default App;