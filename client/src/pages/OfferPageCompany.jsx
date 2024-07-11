import { useLoaderData } from "react-router-dom";

import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import JobOffer from "../components/JobOffer/JobOffer";
import ButtonsDelete from "../components/ButtonsDelete/ButtonsDelete";
import ButtonsUpDate from "../components/ButtonsUpDate/ButtonsUpDate";
import { useUserContext } from "../contexts/UserContext";

export default function OfferPageCompany() {
  const { user } = useUserContext();
  const offers = useLoaderData();
  return (
    <div>
      <div className="flex justify-between items-center w-full  top-0 left-0 right-0 z-50">
        <div className="w-24 m-5">
          <LogoExternatic />
        </div>
      </div>
      <div>
        <AvatarCompany user={user} />
        {offers.map((offer) => (
          <div key={offer.id}>
            <JobOffer
              jobTitle={offer.job_title}
              name={offer.name}
              location={offer.location}
              minSalary={offer.min_salary}
              maxSalary={offer.max_salary}
              jobType={offer.job_type}
            />
            <ButtonsDelete id={offer.id} user={user} />
            <ButtonsUpDate />
          </div>
        ))}
      </div>
    </div>
  );
}
