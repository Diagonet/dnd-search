import SingleResult from "./SingleResult";
const MultipleSearchResults = (props) => {
  return (
    <>
      {props.value.results.map((result, index) => (
        <SingleResult
          key={index}
          value={result}
          onClickFunction={props.onClick}
        />
      ))}
    </>
  );
};

export default MultipleSearchResults;
