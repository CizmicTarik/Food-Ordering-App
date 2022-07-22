import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/hrana.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Naručivanje Hrane</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food"></img>
      </div>
    </>
  );
};

export default Header;
