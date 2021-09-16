import React from "react";
import styles from "./Button.module.css";
// this is basically a signal to the underlying compilation process so that
// the compiler transforms the code into CSS modules

// import styled from "styled-components";

// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

 

//   ${'' /* in-built creation of a unique class name in the developer tools which basically means that these styles will
//   never be able to affect other components of the program. */}
//   &:focus {
//     outline: none;
//   }
//   ${'' /* this basically uses ampersand because it represents a pseudo-selector */}
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
// this is known as attack template literal, this is a default Javascript feature
// button is nothing but a method inside the default Javascript object called styled

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
