import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <h4 className={classes.footer}>
      © Diplomski rad - Tarik Cizmic, {new Date().getFullYear()}.
    </h4>
  );
};

export default Footer;
