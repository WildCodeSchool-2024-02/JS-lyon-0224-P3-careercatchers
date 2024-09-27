import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.module.css";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import { UserProvider } from "./contexts/UserContext";
import "./index.css";

function App() {
  return (
    <UserProvider>
      <main>
        <NavBarMobile />
        <Outlet />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={2}
        />
      </main>
    </UserProvider>
  );
}

export default App;
