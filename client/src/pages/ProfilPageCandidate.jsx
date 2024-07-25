import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";
import { useUserContext } from "../contexts/UserContext";

export default function ProfilPageCandidate() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const { user, logout } = useUserContext();
  const customId = "custom-id-yes";
  const notifyInfo = (text) => toast.info(text, { toastId: customId });
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(false);
    notifyInfo(`A bientôt ${userData.firstname}`);
  };

  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/users/delete-user`, {
        method: "DELETE",

        credentials: "include",
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
        notifySuccess(`Bienvenue ${data.firstname} ${data.lastname}`);
        if (data.role !== "candidate") {
          navigate("/profil-page-company");
        }
        // notifySuccess(`Bienvenue ${data.lastname} ${data.firstname}`);
      } else if (response.status === 401) {
        logout(true);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
      notifyInfo("Vous ne pouvez accéder à cette page");
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
        <div className="md:flex justify-center items-center flex-row gap-24 mt-40">
          <div>
            <AvatarUser user={userData} />
          </div>
          <div>
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
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}
