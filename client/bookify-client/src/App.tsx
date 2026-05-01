import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AutoComplete from "./pages/AutoComplete";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashbord" element={<Dashboard/>} />
        <Route path="/auto-complete" element= {<AutoComplete />} />
      </Routes>
    </>
  );
}

export default App;
