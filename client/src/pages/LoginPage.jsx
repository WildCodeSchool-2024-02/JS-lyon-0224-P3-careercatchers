import Logo from "../assets/logo/EXTERNATIC-LOGO-NAME.png";
import BurgerMenu from "../components/BurgerMenu";

import LoginUser from "../components/LoginUser/LoginUser";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen min-w-96">
      <div className="flex justify-between items-center w-full ">
        <BurgerMenu />
        <img src={Logo} alt="logo Externatic" className="w-24 m-5" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <LoginUser />
      </div>
    </div>
  );
}
