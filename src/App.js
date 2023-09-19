import AboutMe from "./pages/AboutMe";
import Start from "./pages/Start";

console.log(window.location);

const page = window.location.pathname === '/' ? <Start/> : <AboutMe/> 

function App() {
  return (
   page
  );
}

export default App;
