import AvatarUser from "../components/AvatarUser/AvatarUser";
import JobOffer from "../components/JobOffer/JobOffer";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import BurgerMenu from "../components/NavBar/BurgerMenu";
import NavbarButtonsConnected from "../components/NavBar/NavBarButtonsConnected";

export default function MyApplication() {
  return (
    <div>
      <BurgerMenu />
      <NavbarButtonsConnected />
      <AvatarUser />
      <JobOffer />
      <LogoExternatic />
    </div>
  );
}
