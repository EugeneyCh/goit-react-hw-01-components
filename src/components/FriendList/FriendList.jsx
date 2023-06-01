import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <>
          <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            id={friend.id}
            isOnline={friend.isOnline}
          />
        </>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      avatar: PropTypes.string,
      id: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
