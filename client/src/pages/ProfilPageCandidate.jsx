import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import { useUserContext } from "../contexts/UserContext";
import useVerifyContext from "../contexts/useVerifyContext";

export default function ProfilPageCandidate() {
  const { isAuthorised, fetchData } = useVerifyContext();
  const { user, logout } = useUserContext();
  const notifyInfo = (text) => toast.info(text);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(false);
    notifyInfo("À bientôt :)");
  };

  useEffect(() => {
    async function verifyAuth() {
      await fetchData("candidates");

      if (isAuthorised === false) {
        navigate("/login-page");
      }
    }
    verifyAuth();
  }, [fetchData, isAuthorised, navigate, user.roleId]);

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
