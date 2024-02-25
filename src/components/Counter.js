import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { artir, azalt } from "../features/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.counter.value;
  });
  const addOnclick = () => {
    dispatch(artir());
  };
  const minus = () => {
    dispatch(azalt());
  };
  return (
    <div>
      <button onClick={addOnclick}>Plus</button>
      <div>{value}</div>
      <button onClick={minus}>Minus</button>
    </div>
  );
};

export default Counter;
