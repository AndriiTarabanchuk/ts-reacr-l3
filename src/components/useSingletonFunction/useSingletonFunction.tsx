import { useCallback, useRef } from "react";

type Callback = (...args: unknown[]) => unknown;

function useSingletonFunction<T extends Callback>(func: T) {
  const funcRef = useRef(func);
  funcRef.current = func;

  const singletonFunction = (...args: Parameters<T>) =>
    funcRef.current(...args) as ReturnType<T>;

  return useCallback(singletonFunction, []);
}
export default useSingletonFunction;
