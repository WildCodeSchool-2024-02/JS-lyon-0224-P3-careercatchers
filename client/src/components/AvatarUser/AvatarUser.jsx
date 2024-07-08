import PropTypes from "prop-types";
import avatarUser from "../../assets/logo/avatarUser.png";

export default function AvatarUser({ userData }) {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarUser} alt="Avatar utilisateur" />
      <p>{userData.firstname}</p>
      <p>{userData.lastname}</p>
    </div>
  );
}

AvatarUser.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
};
