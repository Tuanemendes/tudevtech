import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Start from "./pages/Start";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="*" element={<div> 404 Página não encontrada!</div>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
