import PropTypes from "prop-types";
import avatarUser from "../../assets/logo/avatar-user.png";
import styles from "./AvatarUser.module.css";

export default function AvatarUser({ user }) {
  return (
    <div className="flex flex-col items-center pt-24 md:pt-1">
      <img
        src={avatarUser}
        alt="Avatar utilisateur"
        className={styles.avatarUser}
      />
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
    </div>
  );
}

AvatarUser.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
};
