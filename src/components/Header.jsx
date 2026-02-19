import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars mr-15 "></i>
      <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-basket-shopping"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Header;