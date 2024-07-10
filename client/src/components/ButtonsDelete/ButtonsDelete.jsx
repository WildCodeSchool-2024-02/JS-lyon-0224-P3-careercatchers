import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ButtonsDelete({ id, user }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const handleDelete = async () => {
    try {
      const response = await fetch(`${ApiUrl}/api/offers/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          user,
        }),
      });

      if (response.ok) {
        notifySuccess("L'opération a réussie");
        navigate("/offer-page-company");
      } else {
        notifyFail("L'opération a échouée");
      }
    } catch (error) {
      notifyFail("Une erreur s'est produite");
    }
  };

  return (
    <div className="flex flex-col mt-5 mb-5">
      <button
        className="flex justify-center bg-primary font-custom text-white rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border"
        type="button"
        onClick={() => handleDelete(id)}
      >
        Supprimer
      </button>
    </div>
  );
}

ButtonsDelete.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  user: PropTypes.shape.isRequired,
};
