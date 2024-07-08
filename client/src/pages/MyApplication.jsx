import AvatarUser from "../components/AvatarUser/AvatarUser";
import JobOffer from "../components/JobOffer/JobOffer";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import BurgerMenu from "../components/NavBar/BurgerMenu";
import NavbarButtonsConnected from "../components/NavBar/NavBarButtonsConnected";
import { useUserContext } from "../contexts/UserContext";

export default function MyApplication() {
  const { user } = useUserContext();
  return (
    <div>
      <BurgerMenu />
      <NavbarButtonsConnected />
      <AvatarUser user={user} />
      <JobOffer />
      <LogoExternatic />
    </div>
  );
}
