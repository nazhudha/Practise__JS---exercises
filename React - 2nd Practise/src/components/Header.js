import Button from "./Button";
import { useState } from "react";


const Header = ({ title }) => {
  const onClick = () => {
   updateNumber(number+1)
  }

  const onClick2 = () => {
    updateNumber(number-1)
   }
 

  const [number, updateNumber] = useState(0)

  return (
    <header className="header ">
      <h1>{title}</h1>
      <Button color="green" text="Add number" onClick={onClick} />
      <Button  text="Minus number" onClick={onClick2} />
      <br/>
      <h1>{number}</h1>

    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//CSS in JSX
// const headingStyle = {
//   color: 'red',
//   backgroundColor: "blue"
// }

export default Header;
