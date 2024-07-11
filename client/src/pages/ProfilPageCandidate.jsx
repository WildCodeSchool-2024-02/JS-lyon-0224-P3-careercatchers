import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import { useUserContext } from "../contexts/UserContext";
import useVerifyContext from "../contexts/useVerifyContext";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function ProfilPageCandidate() {
  const { isAuthorised, fetchData } = useVerifyContext();
  const { user, logout } = useUserContext();
  const notifyInfo = (text) => toast.info(text);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(false);
    notifyInfo(`A bientôt ${user.firstname}`);
  };

  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/users/delete-user`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: user.id }),
      });

      if (response.ok === true) {
        logout(true);
        notifySuccess("Votre profil est supprimé");
      } else {
        notifyFail("L'opération a échouée");
      }
    } catch (error) {
      notifyFail("Une erreur s'est produite");
    }
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
      <div className="flex justify-center font-custom text-sm ml-9">
        <p className="pr-1">Supprimer mon profil: </p>
        <button
          type="button"
          className="text-primary underline"
          onClick={() => handleDelete(user.id)}
        >
          Suppimer
        </button>
      </div>
      <div className="flex w-24 mx-auto pt-16 ml-2 ">
        <LogoExternatic />
      </div>
    </>
  );
}
