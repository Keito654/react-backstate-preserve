import { useContext, useState, useEffect } from "react";
import { StateHistoryContext } from "./StateHistoryProvider";

export const useStateWithHistory = <T>(
  initialValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const context = useContext(StateHistoryContext);
  if (!context) {
    throw new Error(
      "useStateWithHistory must be used within a StateHistoryProvider"
    );
  }

  const { state, setState } = context;
  const [value, setValue] = useState<T>(state[key] || initialValue);

  useEffect(() => {
    return () => {
      setState((prevState) => ({ ...prevState, [key]: value }));
    };
  }, [value, key, setState]);

  return [value, setValue];
};
