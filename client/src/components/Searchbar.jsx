import Search from "../assets/logo/search.svg";

export default function SearchBar() {
  return (
    <div className="flex justify-between mr-10 ml-10 border-solid border-2 rounded-md ">
      <input
        className="flex outline-none"
        type="text"
        placeholder="Domaine, poste..."
      />
      <button className="bg-pink-600  rounded-md" type="button">
        <img className="h-8" src={Search} alt="logo loupe" />
      </button>
    </div>
  );
}
