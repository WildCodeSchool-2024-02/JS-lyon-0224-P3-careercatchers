import BurgerMenu from "../components/BurgerMenu";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import NavBarButtons from "../components/NavBar/NavBarButtons";
import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";

export default function ProfilPageCandidate() {
  return (
    <div>
      <BurgerMenu />
      <NavBarButtons />
      <AvatarUser />
      <ButtonsProfileCandidate />
      <LogoExternatic />
    </div>
  );
}
