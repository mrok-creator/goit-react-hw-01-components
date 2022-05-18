import PropTypes from 'prop-types';

import s from './friendListItem.module.css';
function FriendsListItem({ avatar, isOnline, name }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? `${s.status}` : `${s.statusOff}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
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
