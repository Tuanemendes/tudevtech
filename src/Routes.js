import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Start from "./pages/Start";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import PageDefault from "./components/PageDefault";


function AppRoutes() {
  return (
   <BrowserRouter>
   <Menu/>
    <Routes>
      <Route path="/" element={<PageDefault/>}>
        <Route index element={<Start/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
      </Route>
     
      <Route path="*" element={<div> 404 Página não encontrada!</div>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default AppRoutes;
