import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import ButtonsProfileCompany from "../components/ButtonsProfileCompany/ButtonsProfileCompany";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";

export default function ProfilPageCandidate() {
  const { user, logout } = useUserContext();
  const notifyInfo = (text) => toast.info(text);
  const handleLogout = () => {
    logout(false);
    notifyInfo("À bientôt :)");
  };

  return (
    <div>
      <div className="flex justify-center w-32 mx-auto ">
        <LogoExternatic />
      </div>
      <div className="mt-20">
        <AvatarCompany user={user} />
        <ButtonsProfileCompany />
        <button
          type="button"
          onClick={handleLogout}
          className="flex justify-center mx-auto"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
