import type { ReactNode } from 'react';
import React, { createContext, useState } from 'react';

interface StateHistoryContextProps {
  state: { [key: string]: any };
  setState: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
}

export const StateHistoryContext
  = createContext<StateHistoryContextProps | null>(null);

interface StateHistoryProviderType {
  children: ReactNode;
}

export const StateHistoryProvider: React.FC<StateHistoryProviderType> = ({
  children,
}) => {
  const [state, setState] = useState<{ [key: string]: any }>({});

  return (
    // eslint-disable-next-line react/no-unstable-context-value
    <StateHistoryContext.Provider value={{ state, setState }}>
      {children}
    </StateHistoryContext.Provider>
  );
};
