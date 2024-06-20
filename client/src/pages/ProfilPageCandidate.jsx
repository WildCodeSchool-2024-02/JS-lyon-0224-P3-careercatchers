import BurgerMenu from "../components/NavBar/BurgerMenu";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import NavBarButtons from "../components/NavBar/NavBarButtons";
import AvatarUser from "../components/AvatarUser/AvatarUser";
import ButtonsProfileCandidate from "../components/ButtonsProfileCandidate/ButtonsProfileCandidate";

export default function ProfilPageCandidate() {
  return (
    <div>
      <div className="flex justify-between">
        <BurgerMenu />
        <NavBarButtons />
      </div>
      <AvatarUser />
      <ButtonsProfileCandidate />
      <div className="flex w-32 mx-auto">
        <LogoExternatic />
      </div>
    </div>
  );
}
