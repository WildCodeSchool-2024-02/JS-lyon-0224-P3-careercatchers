import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import BurgerMenu from "../components/NavBar/BurgerMenu";
import NavBarButtons from "../components/NavBar/NavBarButtons";

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
