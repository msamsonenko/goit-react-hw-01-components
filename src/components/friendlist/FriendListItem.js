import PropTypes from 'prop-types';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className="friend" key={id}>
      <span className={isOnline ? 'status isOnline' : 'status'}></span>
      <img
        className="friend-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend-name">{name}</p>
    </li>
  );
}
FriendListItem.propType = {
  id: PropTypes.string,
  avatar: PropTypes.node,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
