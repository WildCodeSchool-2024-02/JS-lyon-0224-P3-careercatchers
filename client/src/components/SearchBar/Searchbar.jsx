import Search from "../../assets/logo/search.svg";

export default function SearchBar() {
  return (
    <div className="flex justify-center mx-auto max-w-sm min-w-96 ">
      <input
        className="flex outline-none border-solid w-96 shadow-sm border rounded-s-md  border-r-0  border-1 py-2 pl-4 "
        type="text"
        placeholder="Domaine, poste..."
        disabled
      />
      <button className="bg-primary  rounded-e-md shadow-md px-2" type="button">
        <img className="h-5 w-8" src={Search} alt="lancer la recherche" />
      </button>
    </div>
  );
}
