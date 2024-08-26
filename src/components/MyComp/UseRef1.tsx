import React, { useRef } from "react";

export function ComponentWithRef() {
  const divRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  // ...

  return (
    <>
      <div ref={divRef}>Це div елемент</div>
      <textarea ref={textareaRef}></textarea>
      <select ref={selectRef}></select>
    </>
  );
}
