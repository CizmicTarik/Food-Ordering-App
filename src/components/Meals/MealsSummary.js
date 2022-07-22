import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Najukusnija hrana, dostavljena Vama!</h2>
      <p>
        Izaberite Vaše Omiljeno jelo iz naše ponude i uživajte u hrani u toplini
        svoga doma.
      </p>
      <p>
        Sva naša jela su napravljena od visokokvalitetnih satojaka, tačno na
        vrijeme, i naravno, od strane iskusnih kuhara!
      </p>
    </section>
  );
};

export default MealsSummary;
