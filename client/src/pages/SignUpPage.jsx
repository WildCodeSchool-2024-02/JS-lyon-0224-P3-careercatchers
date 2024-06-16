import BurgerMenu from "../components/BurgerMenu";
import Form from "../components/Form/Form";
import LogoExternatic from "../components/LogoExternatic";

export default function SignUpPage() {
  return (
    <>
      <BurgerMenu />
      <div style={{ width: "120px", height: "90px" }} className="flex mx-auto">
        <LogoExternatic style={{ width: "100%", height: "100%" }} />
      </div>
      <Form />
    </>
  );
}
