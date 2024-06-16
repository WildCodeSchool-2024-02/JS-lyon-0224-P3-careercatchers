import Search from "../assets/logo/search.svg";

export default function SearchBar() {
  return (
    <div className="flex justify-center mr-10 ml-10 border ">
      <input type="text" placeholder="Domaine, poste..." />
      <input type="text" placeholder="Ville" />
      <button type="button">
        <img className="h-9" src={Search} alt="logo loupe" />
      </button>
    </div>
  );
}
