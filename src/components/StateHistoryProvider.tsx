/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, ReactNode } from "react";

interface StateHistoryContextProps {
  state: { [key: string]: any };
  setState: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
}

export const StateHistoryContext =
  createContext<StateHistoryContextProps | null>(null);

interface StateHistoryProvider {
  children: ReactNode;
}

export const StateHistoryProvider: React.FC<StateHistoryProvider> = ({
  children,
}) => {
  const [state, setState] = useState<{ [key: string]: any }>({});

  return (
    <StateHistoryContext.Provider value={{ state, setState }}>
      {children}
    </StateHistoryContext.Provider>
  );
};
