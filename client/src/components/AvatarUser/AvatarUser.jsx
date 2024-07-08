import PropTypes from "prop-types";
import avatarUser from "../../assets/logo/avatarUser.png";

export default function AvatarUser({ userData }) {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarUser} alt="Avatar utilisateur" />
      <p>{userData.email}</p>
    </div>
  );
}

AvatarUser.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};
