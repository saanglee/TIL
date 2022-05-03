import React, { useState, useReducer } from "react";
import Students from "./Students";

const ACTION_TYPES = {
  ADD: "add-student",
  DELETE: "delete-student",
  MARK: "mark-student",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };

    case ACTION_TYPES.DELETE:
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };

    case ACTION_TYPES.MARK:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const Reducer = () => {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>total student number : {studentInfo.count}</p>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.ADD, payload: { name } });
        }}
      >
        ADD
      </button>

      {studentInfo.students.map((student) => {
        return (
          <Students
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
};

export default Reducer;
