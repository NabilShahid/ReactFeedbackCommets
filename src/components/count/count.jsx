import React, { useEffect } from "react";
import { useUpdateCounter } from "../../hooks/update-counter";

const Count = ({currentCount}) => {
  const [count, setCount] = useUpdateCounter(0);
  useEffect(() => {
    console.log("Count Effect for: "+currentCount);
    return () => {
      console.log("Count Effect Destroyed for: "+currentCount);
    };
  },[]);

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </React.Fragment>
  );
};

export default Count;
