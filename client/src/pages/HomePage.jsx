import ExternaticDescription from "../components/ExternaticDescription/ExternaticDescription";
import HomeButtons from "../components/HomeButtons/HomeButtons";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";

export default function HomePage() {
  return (
    <div className="pt-5">
      <div className="flex justify-center w-36 mx-auto">
        <LogoExternatic />
      </div>
      <ExternaticDescription />
      <HomeButtons />
    </div>
  );
}
