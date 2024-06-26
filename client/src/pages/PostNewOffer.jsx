import BurgerMenu from "../components/NavBar/BurgerMenu";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import NewOfferForm from "../components/Form/NewOfferForm";

export default function PostNewOffer() {
  return (
    <>
      <div className="flex justify-between items-center">
        <BurgerMenu />
        <div className="w-24 m-5">
          <LogoExternatic />
        </div>
      </div>
      <h2 className="text-center text-4xl">
        Poster une nouvelle offre d'emploi
      </h2>
      <NewOfferForm />
    </>
  );
}
