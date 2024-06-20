import NavBarMobile from "../components/NavBar/NavBarMobile";
import JobOffer from "../components/JobOffer/JobOffer";
import SearchBar from "../components/SearchBar/Searchbar";

export default function ResultPage() {
  return (
    <>
      <NavBarMobile />
      <SearchBar />

      <JobOffer />
    </>
  );
}
