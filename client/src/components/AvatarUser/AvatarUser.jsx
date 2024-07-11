import PropTypes from "prop-types";
import avatarUser from "../../assets/logo/avatarUser.png";

export default function AvatarUser({ user }) {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarUser} alt="Avatar utilisateur" />
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
    </div>
  );
}

AvatarUser.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
};
