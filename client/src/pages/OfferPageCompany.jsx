import { useEffect, useState } from "react";

import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import ButtonsDelete from "../components/ButtonsDelete/ButtonsDelete";
import ButtonsUpDate from "../components/ButtonsUpDate/ButtonsUpDate";
import JobOffer from "../components/JobOffer/JobOffer";
import { useUserContext } from "../contexts/UserContext";

export default function OfferPageCompany() {
  const { user } = useUserContext();
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [offers, setOffers] = useState();

  useEffect(() => {
    const getOffers = async () => {
      try {
        const res = await fetch(`${ApiUrl}/api/offers/by-company`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user }),
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };
    if (user) {
      getOffers();
    }
  }, [ApiUrl, user]);

  return (
    <div>
      <div className="flex justify-between items-center w-full  top-0 left-0 right-0 z-50">
        <div className="w-24 m-5">{/* <LogoExternatic /> */}</div>
      </div>
      <div>
        <AvatarCompany user={user} />
        {offers !== undefined && offers.length !== 0 ? (
          offers.map((offer) => (
            <div key={offer.id}>
              <JobOffer
                jobTitle={offer.job_title}
                location={offer.location}
                content={offer.content}
                minSalary={offer.min_salary}
                maxSalary={offer.max_salary}
                jobType={offer.job_type}
                publishDate={offer.publish_date}
              />
              <ButtonsDelete id={offer.id} />
              <ButtonsUpDate />
            </div>
          ))
        ) : (
          <p className="text-center mt-6">
            Vous n'avez posté aucune offre pour le moment
          </p>
        )}
      </div>
    </div>
  );
}
