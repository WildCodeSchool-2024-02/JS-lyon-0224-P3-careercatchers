import AvatarUser from "../components/AvatarUser/AvatarUser";
import JobOffer from "../components/JobOffer/JobOffer";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import BurgerMenu from "../components/NavBar/BurgerMenu";
import NavBarButtonsConnected from "../components/NavBar/NavBarButtonsConnected";

export default function FavoritePage() {
  return (
    <div>
      <BurgerMenu />
      <NavBarButtonsConnected />
      <AvatarUser />
      <JobOffer />
      <LogoExternatic />
    </div>
  );
}
