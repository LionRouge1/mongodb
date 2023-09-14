import { createContext, useState } from 'react';
import { UserInfo, UserContextProviderProps, UserContextType } from '../../types';

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children } :UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
