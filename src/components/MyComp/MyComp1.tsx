import React from "react";

export type Props = {
  id: number;
  name: string;
  birthYear: number;
  children: React.ReactNode;
};

function MyComp1({ id, name, birthYear, children }: Props) {
  // Обчислення віку на основі року народження
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <div key={id}>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      {children}
    </div>
  );
}

export default MyComp1;
