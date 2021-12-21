import { Routes, Route } from "react-router-dom";
import Navbox from "./components/Navbox";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Community from "./pages/Community";
import Errorpage from "./components/Errorpage";

function App() {
  return (
    <div className="App">
      <Navbox />

      <Routes>
        <Route path="/:id" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
