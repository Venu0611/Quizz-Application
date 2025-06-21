import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PlayQuiz from "./components/Play-Quiz";
import Alluser from "./components/Alluser";
import Resulted from "./components/Result";
import Signin from "./components/Sign-in";
import Play from "./components/play";
import Home from "./components/Home";

const App = () =>{
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"element={<Home />}   />
        <Route path="/all" element={<Alluser />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/resulting" element={<Resulted />} />
        <Route path="/playquiz" element={<PlayQuiz />} />
        <Route path="/playing" element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
