import avatarUser from "../../assets/logo/avatarUser.png";

export default function AvatarUser() {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarUser} alt="" />
      <p>Nom du candidat</p>
    </div>
  );
}
