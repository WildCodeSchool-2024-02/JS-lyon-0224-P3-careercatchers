import { useLoaderData } from "react-router-dom";

import JobOffer from "../components/JobOffer/JobOffer";
import SearchBar from "../components/SearchBar/Searchbar";

export default function ResultPage() {
  const offers = useLoaderData();

  return (
    <>
      <SearchBar />
      {offers.map((offer) => (
        <JobOffer
          key={offer.id}
          jobTitle={offer.job_title}
          name={offer.name}
          location={offer.location}
          minSalary={offer.min_salary}
          maxSalary={offer.max_salary}
          jobType={offer.job_type}
        />
      ))}
    </>
  );
}
