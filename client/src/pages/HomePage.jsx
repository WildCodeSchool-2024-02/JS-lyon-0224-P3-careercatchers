import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const offers = useLoaderData();
  return (
    <>
      <h1>Externatic</h1>
      <p>Attrapez votre avenir</p>
      <p>{offers[0].job_title}</p>
    </>
  );
}
