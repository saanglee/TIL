import React from "react";

const FilterMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="FilterMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList &&
        optionList.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
    </select>
  );
};

export default FilterMenu;
