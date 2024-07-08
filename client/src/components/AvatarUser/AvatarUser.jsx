import PropTypes from "prop-types";
import avatarUser from "../../assets/logo/avatarUser.png";

export default function AvatarUser({ user }) {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarUser} alt="Avatar utilisateur" />
      <p>{user.email}</p>
    </div>
  );
}

AvatarUser.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};
