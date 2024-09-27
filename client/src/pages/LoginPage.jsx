import LoginUser from "../components/LoginUser/LoginUser";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen min-w-96">
      <div className="flex justify-center w-32 mx-auto ">
        <LogoExternatic />
      </div>
      <div className="flex flex-auto items-center justify-center ">
        <LoginUser />
      </div>
    </div>
  );
}
