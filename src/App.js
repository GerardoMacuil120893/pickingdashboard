import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SideMenu } from "./Components/SideMenu/SideMenu";
import { Header } from "./Components/Header/Header";
import { Dashboard } from "./Components/views/Dashboard/Dashboard";
import { Maps } from "./Components/views/Maps/Maps";
import { Metrics } from "./Components/views/Metrics/Metrics";
import { Paths } from "./Components/views/Paths/Paths";
// import { Robots } from "./Components/views/Robots/Robots";
import { GeneralRobot } from "./Components/views/Robots/GeneralRobot/GeneralRobot";
import { PrivateRobot } from "./Components/views/Robots/PrivateRobot/PrivareRobot";
import { Roles } from "./Components/views/Roles/Roles";
import { Users } from "./Components/views/Users/Users";
import { WayPoints } from "./Components/views/WayPoints/WayPoints";
//import { Team } from "./Components/Samples/Team";
function App() {
  const [isSideMenu, setIsSideMenu] = useState(true);

  return (
    <div className="app">
      <SideMenu isSideMenu={isSideMenu} />
      <main className="content">
        <Header setIsSideMenu={setIsSideMenu} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/generalrobots" element={<GeneralRobot />} />
          <Route path="/privaterobots" element={<PrivateRobot />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/waypoints" element={<WayPoints />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
