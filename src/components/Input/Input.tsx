import React, { ChangeEvent } from "react";

type InputProps = {
  value: string | number;
  type: "text" | "number";
  onChange: (value: string | number) => void;
};

function Input({ value, type, onChange }: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (type === "number") {
      // newValue = Number(newValue); //??????
    }
    console.log("Змінене значення:", newValue);
    onChange(newValue);
  };

  return <input value={value.toString()} type={type} onChange={handleChange} />;
}

export default Input;
