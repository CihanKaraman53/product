import React, { FC, useEffect, useState } from "react";
import "./Checkbox.css";

interface CheckboxProp {
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Checkbox: FC<CheckboxProp> = ({ name, onChange }) => {
  return (
    <div className="wrapper">
      <input id={name} onChange={onChange} type="checkbox"></input>
      <label className="label" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default Checkbox;
