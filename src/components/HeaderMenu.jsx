import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`${styles.headerMenuStyle} card`}>
      <li>WhishList</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
