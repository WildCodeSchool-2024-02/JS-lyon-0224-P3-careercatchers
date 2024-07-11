import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import ButtonsProfileCompany from "../components/ButtonsProfileCompany/ButtonsProfileCompany";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import { useUserContext } from "../contexts/UserContext";

export default function ProfilPageCandidate() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const notifyInfo = (text) => toast.info(text);

  const getProfile = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/users/profil-connected`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setUserData(data);
        notifySuccess(`Bienvenue ${data.name}`);
      } else if (response.status === 401) {
        logout(true);
      }
    } catch (err) {
      // Log des erreurs possibles
      notifyFail("Vous ne pouvez accéder à cette page");
      console.error(err);
    }
  };

  const handleLogout = () => {
    notifyInfo(`À bientôt ${userData.name}`);
    logout(false);
  };

  useEffect(() => {
    if (user !== "null" && user !== null) {
      getProfile();
    } else {
      navigate("/login-page");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate, logout]);

  return (
    <div>
      <div className="flex justify-center w-32 mx-auto ">
        <LogoExternatic />
      </div>
      <div className="mt-20">
        {userData ? (
          <>
            <AvatarCompany user={userData} />
            <ButtonsProfileCompany />
            <button
              type="button"
              onClick={handleLogout}
              className="flex justify-center mx-auto"
            >
              Se déconnecter
            </button>
          </>
        ) : (
          <div>Chargement...</div>
        )}
      </div>
    </div>
  );
}
