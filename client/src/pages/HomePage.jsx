import { useLoaderData } from "react-router-dom";
import LogoExternatic from "../components/LogoExternatic";
import HomeButtons from "../components/Homebuttons";
import ExternaticDescription from "../components/ExternaticDescription";

export default function HomePage() {
  const offers = useLoaderData();

  return (
    <>
      <LogoExternatic />
      <ExternaticDescription />
      <p>Attrapez votre avenir</p>
      <p>{offers[0].job_title}</p>
      <HomeButtons />
    </>
  );
}
