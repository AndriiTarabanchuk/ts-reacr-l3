import React, { KeyboardEvent } from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  onPressEnter: () => void;
};

function InputKeyboard({ value, onChange, onPressEnter }: InputProps) {
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Натиснута клавіша Enter");
      onPressEnter();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
  );
}

export default InputKeyboard;
