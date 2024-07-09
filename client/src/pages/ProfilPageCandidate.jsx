import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import { useUserContext } from "../contexts/UserContext";

export default function ProfilPageCandidate() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const { user, logout } = useUserContext();
  const notifyInfo = (text) => toast.info(text);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(false);
    notifyInfo("À bientôt :)");
  };

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
      } else if (response.status === 401) {
        logout(true);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
      notifyInfo("pas accès)");
    }
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
      {userData ? (
        <>
          <AvatarUser user={userData} />
          <ButtonsProfileCandidate />

          <button
            type="button"
            onClick={handleLogout}
            className="flex justify-center mx-auto"
          >
            Se déconnecter
          </button>
        </>
      ) : (
        <p>Chargement...</p>
      )}
      <div className="flex w-24 mx-auto pt-16 ml-2 ">
        <LogoExternatic />
      </div>
    </div>
  );
}
