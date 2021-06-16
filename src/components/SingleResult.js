const SingleResult = ({ value, onClickFunction }) => {
  return (
    <div className="single-result" onClick={() => onClickFunction(value.url)}>
      {value.name}
    </div>
  );
};

export default SingleResult;
