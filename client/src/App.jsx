import { Outlet } from "react-router-dom";
import "./App.module.css";

function App() {
  return (
    <>
      <Outlet />
      <h2 className="bg-yellow-300 text-sky-300">COUCOUC</h2>
    </>
  );
}

export default App;
