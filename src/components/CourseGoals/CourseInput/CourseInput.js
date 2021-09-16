import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     ${"" /* single-line dynamic way of changing component colours */}
//     background: ${(props) => (props.invalid ? "rgb(237, 114, 114)" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}> */}
      {/* this is a snippet of adding dynamic CSS using CSS modules */}

      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* here we don't need to set form-control dynamically because we've predefined it inside <FormControl> while creating
        styled components, therefore only need to script the isValid portion */}

        {/* changing this css class dynamically */}
        {/* we can enter dynamic css classes using backticks which look like this ` ` and 
        the dynamic part of it is written in this way ${ }, all if it is called a 'template literal' */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
