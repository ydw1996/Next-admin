import styles from './MenuLink.modules.css';
import Link from 'next/link';

const MenuLink = ({ item }) => {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
