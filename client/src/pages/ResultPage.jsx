import { useLoaderData } from "react-router-dom";
import NavBarMobile from "../components/NavBar/NavBarMobile";
import JobOffer from "../components/JobOffer";

export default function ResultPage() {
  const offers = useLoaderData();
  return (
    <>
      <NavBarMobile />
      <div className="flex flex-col gap-5 pl-9 pt-8">
        <h1 className="text-3xl text-center pb-4">
          Les Offres près de chez vous ↓↓↓
        </h1>
        {offers.map((offer) => (
          <div key={offer.id} className="pb-4">
            <h2>{`${offer.job_title} ${offer.localisation}`}</h2>
            <p>{offer.name}</p>
          </div>
        ))}
      </div>
      <JobOffer />
    </>
  );
}
