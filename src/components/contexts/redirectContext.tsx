import { useState, createContext } from 'react';
import { RedirectContextProviderProps, RedirectContextType } from '../../types';

export const redirectContext = createContext({} as RedirectContextType);

export const RedirectContextProvider = ({ children }: RedirectContextProviderProps) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <redirectContext.Provider value={{ redirect, setRedirect }}>
      {children}
    </redirectContext.Provider>
  );
};
