// import styled from 'styled-components';

// import styles from a CSS file if you want to use CSS modules
import styles from './Button.module.css';

// note the two backticks indicating this is a tagged template literal
// think of it as special (), as button is a method on the styled object
// styled has methods for all HTML components and takes care of generating unique class names in the backend
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   // media queries allow you to customize CSS for specific devices
//   @media (min-width: 768px) {
//     width: auto;
//   }

//   .&:focus {
//     outline: none;
//   }

//   .&:hover,
//   .&:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// to use a CSS module, just pass styles.x as an object to className
// the class names are changed (scoped) to be unique FOR A SINGLE COMPONENT
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
