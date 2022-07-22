import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
    });
    const formIsValid = enteredNameIsValid && enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Vaše ime</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Molimo vas da upišete svoje ime.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Adresa</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && (
          <p>Molimo vas da upišete svoju adresu.</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Otkaži
        </button>
        <button className={classes.submit}>Potvrdi</button>
      </div>
    </form>
  );
};

export default Checkout;
