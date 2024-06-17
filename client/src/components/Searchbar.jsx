import Search from "../assets/logo/search.svg";

export default function SearchBar() {
  return (
    <div className="flex ml-10 ">
      <input
        className="flex outline-none border-solid border-2 rounded-s-md w-4/5 border-r-0"
        type="text"
        placeholder=" Domaine, poste..."
      />
      <button className="bg-primary  rounded-e-md" type="button">
        <img className="h-8" src={Search} alt="lancer la recherche" />
      </button>
    </div>
  );
}
