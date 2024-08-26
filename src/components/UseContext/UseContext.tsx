import React, { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
};

type UserContextProps = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

// Сам провайдер
export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Хук для використання контексту
export function useUserState() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
