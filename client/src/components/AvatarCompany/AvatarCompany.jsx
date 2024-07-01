import avatarCompany from "../../assets/logo/avatarCompany.png";

export default function AvatarUser() {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarCompany} alt="" />
      <p className="mt-6">Nom de l' Entreprise</p>
    </div>
  );
}
