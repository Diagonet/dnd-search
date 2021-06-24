import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const SingleResult = ({ value, onClickFunction, displayFlag, animations }) => {
  console.log(animations);

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
