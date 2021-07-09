import styles from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.FriendListItem} key={id}>
    <span className={isOnline ? styles.Online : styles.Offline} />
    <img src={avatar} alt={name} width='50' />
    <p className={styles.name}>{name}</p>
  </li>
)

export default FriendListItem;