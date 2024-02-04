import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import { Signin } from "./pages/Signin";
import DashBoard from "./pages/DashBoard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
