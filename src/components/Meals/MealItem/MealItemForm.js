import { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Količina"
        input={{
          id: "amount_" + props.id,
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Dodaj</button>
    </form>
  );
};

export default MealItemForm;
