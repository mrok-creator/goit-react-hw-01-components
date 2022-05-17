import PropTypes from 'prop-types';

import s from './friendListItem.module.css';
function FriendsListItem({ friend }) {
  return (
    <li className={s.item}>
      <span
        className={friend.isOnline ? `${s.status}` : `${s.statusOff}`}
      ></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendsListItem;
