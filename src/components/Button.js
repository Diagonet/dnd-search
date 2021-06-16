import { BsSearch } from "react-icons/bs";
const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      <BsSearch />
      &nbsp; Search
    </button>
  );
};

export default Button;
