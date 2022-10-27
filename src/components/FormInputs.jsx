import React, { useState } from "react";
import "../components/formInputs.css";

export const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const hanldeFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={hanldeFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </>
  );
};
