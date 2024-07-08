import AvatarUser from "../components/AvatarUser/AvatarUser";
import JobOffer from "../components/JobOffer/JobOffer";
import LogoExternatic from "../components/LogoExternatic/LogoExternatic";
import { useUserContext } from "../contexts/UserContext";

export default function MyApplication() {
  const { user } = useUserContext();
  return (
    <div>
      <AvatarUser user={user} />
      <JobOffer />
      <LogoExternatic />
    </div>
  );
}
