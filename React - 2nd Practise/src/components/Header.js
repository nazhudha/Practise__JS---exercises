import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log('clicked')
  }

  return (
    <header className="header ">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      <Button  text="Add" />
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
