import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  const color = isOnline ? '#00ff00' : '#ff0000';
  return (
    <li key={id} className={css.item}>
      <span style={{ backgroundColor: color }} className={css.status}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
