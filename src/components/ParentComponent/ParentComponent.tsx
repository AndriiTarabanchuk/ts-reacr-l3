import React, { MouseEvent } from "react";
import css from "./ParentComponent.module.css";

function ChildComponent() {
  const handleChildClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Зупиняємо спливання події до батьківського компонента
    event.stopPropagation();

    console.log("Клікнуто дитячий компонент");
  };

  return <button onClick={handleChildClick}>Натисни мене або на контур</button>;
}

function ParentComponent() {
  const handleParentClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log("Клікнуто батьківський компонент");
  };

  return (
    <div onClick={handleParentClick} className={css.box}>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
