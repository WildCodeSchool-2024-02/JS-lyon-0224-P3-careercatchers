import { useLoaderData } from "react-router-dom";
import NavBarMobile from "../components/NavBar/NavBarMobile";

export default function ResultPage() {
  const companies = useLoaderData();
  return (
    <>
      <NavBarMobile />
      <h1>Les Offres près de chez vous ↓↓↓</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
        blanditiis nostrum saepe officia illo cum cupiditate repellat? Ex,
        voluptatem sequi id et libero perferendis ducimus, fugiat laboriosam nam
        sit maiores!
      </p>
      <div>
        {companies.map((company) => (
          <div key={company.name}>
            <h2>{company.name}</h2>
            <p>{company.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}
