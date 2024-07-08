import { useLoaderData } from "react-router-dom";

import BurgerMenu from "../components/NavBar/BurgerMenu";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import JobOffer from "../components/JobOffer/JobOffer";
import ButtonsDeleteAdd from "../components/ButtonsDeleteAdd/ButtonsDeleteAdd";

export default function OfferPageCompany() {
  const offers = useLoaderData();
  return (
    <div>
      <div className="flex justify-between items-center w-full  top-0 left-0 right-0 z-50">
        <BurgerMenu />
        <div className="w-24 m-5">
          <LogoExternatic />
        </div>
      </div>
      <div>
        <AvatarCompany />
        {offers.map((offer) => (
          <>
            <JobOffer
              key={offer.id}
              jobTitle={offer.job_title}
              name={offer.name}
              location={offer.location}
              minSalary={offer.min_salary}
              maxSalary={offer.max_salary}
              jobType={offer.job_type}
            />
            <ButtonsDeleteAdd />
          </>
        ))}
      </div>
    </div>
  );
}
