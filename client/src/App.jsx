import { Outlet } from "react-router-dom";
import "./App.module.css";

function App() {
  return (
    <>
      <Outlet />
      <h2 className="bg-green-200">COUCOUC</h2>
    </>
  );
}

export default App;
