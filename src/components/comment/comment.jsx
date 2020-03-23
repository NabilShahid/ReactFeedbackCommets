import React, { useState, useEffect } from "react";
import { useUpdateCounter } from "../../hooks/update-counter";
import Count from "../count/count";

const Comment = () => {
  const [countVisible, setCountVisible] = useState(true);
  const [count2Visible, setCount2Visible] = useState(true);
  useEffect(() => {
    console.log("Effect Init Called");
    return () => {
      console.log("Effect Init Destroyed");
    };
  }, []);
  useEffect(() => {
    console.log("Effect UpdateCalled Called");
    return () => {
      console.log("Effect Update Destroyed");
    };
  }, [countVisible, count2Visible]);

  return (
    <React.Fragment>
      {countVisible && <Count currentCount={1} />}

      <button
        onClick={() => {
          setCountVisible(!countVisible);
        }}
        style={{ backgroundColor: "red" }}
      >
        Toggle
      </button>
      {count2Visible && <Count  currentCount={2} />}

      <button
        onClick={() => {
          setCount2Visible(!count2Visible);
        }}
        style={{ backgroundColor: "red" }}
      >
        Toggle
      </button>
    </React.Fragment>
  );
};

export default Comment;
