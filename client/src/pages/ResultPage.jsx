import JobOffer from "../components/JobOffer/JobOffer";
import NavBarMobile from "../components/NavBar/NavBarMobile";
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
