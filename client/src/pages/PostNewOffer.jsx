import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import NewOfferForm from "../components/Form/NewOfferForm";

export default function PostNewOffer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center w-24 m-5">
          <LogoExternatic />
        </div>
      </div>
      <h2 className="text-center text-3xl py-6">
        Poster une nouvelle offre d'emploi
      </h2>
      <NewOfferForm />
    </>
  );
}
