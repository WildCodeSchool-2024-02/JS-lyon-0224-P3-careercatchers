import { Link } from "react-router-dom";

import Briefcase from "../../assets/logo/briefcase.svg";
import Folder from "../../assets/logo/folder.svg";

export default function ProfilPageCandidate() {
  return (
    <div className="flex flex-col  items-center gap-5 pt-14 ">
      <Link to="/offer-page-company" tabIndex="-1">
        <button
          className="flex items-center bg-primary font-custom text-white rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border relative"
          type="button"
        >
          <img className="w-6 mr-3" src={Folder} alt="Dossier" />
          <span className="absolute left-1/2 transform -translate-x-1/2">
            Mes offres
          </span>
        </button>
      </Link>
      <Link to="/mes-candidats" tabIndex="-1">
        <button
          className="flex items-center bg-primary font-custom text-white rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border relative"
          type="button"
        >
          <img className="w-6 mr-3" src={Briefcase} alt="Attaché-case" />
          <span className="absolute left-1/2 transform -translate-x-1/2">
            Mes candidatures
          </span>
        </button>
      </Link>
      <Link to="/post-offer" tabIndex="-1">
        <button
          className="flex items-center bg-primary font-custom text-white rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border relative"
          type="button"
        >
          <img className="w-6 mr-3" src={Briefcase} alt="Attaché-case" />
          <span className="absolute left-1/2 transform -translate-x-1/2">
            Poster une offre
          </span>
        </button>
      </Link>
    </div>
  );
}
