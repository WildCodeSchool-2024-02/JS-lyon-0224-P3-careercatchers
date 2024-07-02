import { Link } from "react-router-dom";

import Briefcase from "../../assets/logo/briefcase.svg";
import Folder from "../../assets/logo/folder.svg";
import HeartWhite from "../../assets/logo/heartWhite.svg";

export default function ProfilPageCandidate() {
  return (
    <div className="flex flex-col  items-center gap-5 pt-14 ">
      <Link to="/mes-favoris">
        <button
          className=" flex items-center bg-primary justify-between font-custom text-white  rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border relative"
          type="button"
        >
          <img className="w-6 flex " src={HeartWhite} alt="Logo favoris" />
          <span className="absolute left-1/2 transform -translate-x-1/2">
            Mes favoris
          </span>
        </button>
      </Link>
      <Link to="/mes-infos">
        <button
          className=" flex items-center bg-primary justify-between font-custom text-white  rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border relative"
          type="button"
        >
          <img className="w-6 flex " src={Folder} alt="Logo favoris" />
          <span className="absolute left-1/2 transform -translate-x-1/2">
            Mes infos
          </span>
        </button>
      </Link>
      <Link to="/mes-candidatures">
        <button
          className="flex items-center bg-primary justify-between font-custom text-white  rounded-md mmx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border relative"
          type="button"
        >
          <img className="w-6 flex " src={Briefcase} alt="Logo favoris" />

          <span className="absolute left-1/2 transform -translate-x-1/2">
            Mes candidatures
          </span>
        </button>
      </Link>
    </div>
  );
}
