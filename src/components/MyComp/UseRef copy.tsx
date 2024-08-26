import React, { useRef } from "react";

export function TextInputWithFocus() {
  // Тут ми вказуємо, що ref буде посилатися на елемент типу HTMLInputElement
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // Поле current тепер має властивості, що є у елемента HTMLInputElement
    inputEl.current?.focus();
  };

  return (
    <>
      {/* Тут inputEl стане посиланням на цей input елемент */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Встановити фокус на поле введення</button>
    </>
  );
}
