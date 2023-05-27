import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
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

export default FriendList;
