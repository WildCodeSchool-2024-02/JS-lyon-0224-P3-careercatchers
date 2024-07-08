import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import ButtonsProfileCompany from "../components/ButtonsProfileCompany/ButtonsProfileCompany";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import BurgerMenu from "../components/NavBar/BurgerMenu";

export default function ProfilPageCandidate() {
  const { logout } = useUserContext();
  const notifyInfo = (text) => toast.info(text);
  const handleLogout = () => {
    logout(false);
    notifyInfo("À bientôt :)");
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50">
        <BurgerMenu />
        <div className="w-24 m-5">
          <LogoExternatic />
        </div>
      </div>
      <div className="mt-20">
        <AvatarCompany />
        <ButtonsProfileCompany />
        <button type="button" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
