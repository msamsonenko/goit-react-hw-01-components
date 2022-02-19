import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import './FriendList.css';

export default function Friendlist({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}
Friendlist.propType = {
  friends: PropTypes.array,
};
