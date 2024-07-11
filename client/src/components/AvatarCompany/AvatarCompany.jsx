import PropTypes from "prop-types";

import avatarCompany from "../../assets/logo/avatarCompany.png";

export default function AvatarCompany({ user }) {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarCompany} alt="" />
      <p className="mt-6">{user.name}</p>
    </div>
  );
}

AvatarCompany.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
