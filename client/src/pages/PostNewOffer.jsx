import BurgerMenu from "../components/BurgerMenu";
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
      <NewOfferForm />
    </>
  );
}
