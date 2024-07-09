import PropTypes from "prop-types";

import avatarCompany from "../../assets/logo/avatarCompany.png";

export default function AvatarUser({ user }) {
  return (
    <div className="flex flex-col items-center pt-24">
      <img src={avatarCompany} alt="" />
      <p className="mt-6">{user.name}</p>
    </div>
  );
}

AvatarUser.propTypes = {
  user: PropTypes.shape.isRequired,
};
