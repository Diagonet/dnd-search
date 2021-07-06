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
        />
      ))}
    </>
  );
};

export default MultipleSearchResults;
