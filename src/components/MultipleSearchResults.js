import SingleResult from "./SingleResult";
const MultipleSearchResults = (props) => {
  return (
    <>
      {props.value.results.map((result, index) => (
        <SingleResult
          key={index}
          value={result}
          onClickFunction={props.onClick}
          displayFlag={props.displayFlag}
          animations={props.animations}
        />
      ))}
    </>
  );
};

export default MultipleSearchResults;
