import React from "react";

export interface User {
  id: number;
  name: string;
  birthYear: number;
}

const MyComp: React.FC<{ user: User }> = ({ user }) => {
  // Обчислення віку на основі року народження
  const currentYear = new Date().getFullYear();
  const age = currentYear - user.birthYear;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComp;
