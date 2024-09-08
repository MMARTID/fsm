// context/UserContext.js
import React, { createContext, useContext } from 'react';
import { useSession } from 'next-auth/react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const { data: session } = useSession();
  return (
    <UserContext.Provider value={session}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
