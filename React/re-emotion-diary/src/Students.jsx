import React from "react";

const ACTION_TYPES = {
  ADD: "add-student",
  DELETE: "delete-student",
  MARK: "mark-student",
};

const Students = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({ type: ACTION_TYPES.MARK, payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.DELETE, payload: { id } });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Students;
