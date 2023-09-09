import { createContext, useState } from 'react';
import { UserInfo, UserContextProviderProps, UserContextType } from '../../types';

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children } :UserContextProviderProps) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
