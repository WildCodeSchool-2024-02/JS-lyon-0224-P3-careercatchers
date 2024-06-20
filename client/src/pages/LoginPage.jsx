import BurgerMenu from "../components/NavBar/BurgerMenu";
import LoginUser from "../components/LoginUser/LoginUser";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen min-w-96">
      <div className="flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50">
        <BurgerMenu />
        <div className="w-24 m-5">
          {" "}
          <LogoExternatic />
        </div>
      </div>
      <div className="flex flex-auto items-center justify-center ">
        <LoginUser />
      </div>
    </div>
  );
}
