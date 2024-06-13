import LogoExternatic from "../components/LogoExternatic";
import HomeButtons from "../components/Homebuttons";
import ExternaticDescription from "../components/ExternaticDescription";

export default function HomePage() {
  return (
    <div className="pt-5">
      <LogoExternatic />
      <ExternaticDescription />
      <HomeButtons />
    </div>
  );
}
