import SignUpForm from "../components/Form/SignUpForm";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";

export default function SignUpPage() {
  return (
    <>
      <div className="flex justify-center w-32 mx-auto ">
        <LogoExternatic />
      </div>
      <SignUpForm />
    </>
  );
}
