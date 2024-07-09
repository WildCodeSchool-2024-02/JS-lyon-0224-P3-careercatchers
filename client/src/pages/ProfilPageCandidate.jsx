import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import { useUserContext } from "../contexts/UserContext";

export default function ProfilPageCandidate() {
  const { user, logout } = useUserContext();
  const notifyInfo = (text) => toast.info(text);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(false);
    notifyInfo("À bientôt :)");
  };

  if (user !== "null" && user !== null) {
    return (
      <>
        <AvatarUser user={user} />
        <ButtonsProfileCandidate />
        <button
          type="button"
          onClick={handleLogout}
          className="flex justify-center mx-auto"
        >
          Se déconnecter
        </button>
        <div className="flex w-24 mx-auto pt-16 ml-2 ">
          <LogoExternatic />
        </div>
      </>
    );
  }

  navigate("/login-page");
}
