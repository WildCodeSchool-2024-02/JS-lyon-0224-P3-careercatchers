import BurgerMenu from "../components/BurgerMenu";
import SignUpForm from "../components/Form/SignUpForm";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";

export default function SignUpPage() {
  return (
    <>
      <BurgerMenu />
      <div className="flex justify-center w-32 mx-auto ">
        <LogoExternatic />
      </div>
      <SignUpForm />
    </>
  );
}
