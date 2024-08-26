import React, { useRef, useState } from "react";

function UseRef() {
  const countRef = useRef<number>(0);
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    countRef.current += 1;
    setCount(count + 1);
    console.log(`Поточне значення: ${countRef.current}`);
  };

  return <button onClick={increment}>Збільшити {count}</button>;
}

export default UseRef;
