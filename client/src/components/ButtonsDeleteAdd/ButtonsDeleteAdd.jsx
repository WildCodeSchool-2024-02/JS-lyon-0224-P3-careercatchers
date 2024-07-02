export default function ButtonsDeleteAdd() {
  return (
    <div className="flex flex-col mt-5 mb-5">
      <button
        className=" flex justify-center bg-primary  font-custom text-white  rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border"
        type="button"
      >
        Supprimer
      </button>
      <button
        className=" flex  bg-primary justify-center font-custom text-white  rounded-md mx-auto max-w-sm min-w-60 px-3 py-2 mb-1 border"
        type="button"
      >
        Modifer
      </button>
    </div>
  );
}
