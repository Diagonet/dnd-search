import { CSSTransition } from "react-transition-group";
import React from "react";

const SingleResult = ({ value, onClickFunction, displayFlag }) => {
  return (
    <>
      <CSSTransition
        in={displayFlag}
        classNames="animation"
        timeout={500}
        unmountOnExit
      >
        <div
          className="single-result"
          onClick={() => onClickFunction(value.url)}
        >
          {value.name}
        </div>
      </CSSTransition>
    </>
  );
};

export default SingleResult;
