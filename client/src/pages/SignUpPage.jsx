import Logo from "../assets/logo/EXTERNATIC-LOGO-NAME.png";
import BurgerMenu from "../components/BurgerMenu";
import SignUpForm from "../components/Form/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <BurgerMenu />
      <div className="flex justify-center">
        <img src={Logo} alt="logo Externatic" className="  w-32" />
      </div>
      <SignUpForm />
    </>
  );
}
