import React from "react";

type User = {
  name: string;
  email: string;
};

type Props = {
  user: User;
  onUserUpdate: (user: User) => void;
};

export function MyComp2({ user, onUserUpdate }: Props) {
  // компонент UserProfile
  return null;
}

export default MyComp2;
