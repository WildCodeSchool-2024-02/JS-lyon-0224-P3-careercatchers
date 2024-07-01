import AvatarCompany from "../components/AvatarCompany/AvatarCompany";
import ButtonsProfileCompany from "../components/ButtonsProfileCompany/ButtonsProfileCompany";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import BurgerMenu from "../components/NavBar/BurgerMenu";

export default function ProfilPageCandidate() {
  return (
    <div>
      <div className="flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50">
        <BurgerMenu />
        <div className="w-24 m-5">
          <LogoExternatic />
        </div>
      </div>
      <div className="mt-20">
        <AvatarCompany />
        <ButtonsProfileCompany />
      </div>
    </div>
  );
}
