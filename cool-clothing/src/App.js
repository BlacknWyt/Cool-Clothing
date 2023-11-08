import Landing from "./components/Landing";
import Nav from "./components/Nav.js";
import Legal from "./components/Legal.js";
import Profile from "./components/Profile.js";
import Shopping from "./components/Shopping.js";
import Cost from "./components/Cost.js";

import { Route, Routes } from "react-router-dom";

//App
function App() {
  return (
    //routers for each component
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/Cost" element={<Cost />} />
      </Routes>
    </>
  );
}

export default App;
