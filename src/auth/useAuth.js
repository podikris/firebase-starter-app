import { useState, useEffect } from "react";
import { getCurrentUser } from "./getCurrentUser";
import { authListener } from "./addAuthListener";
export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState(() => {
    const user = getCurrentUser;
    const isLoading = !user;

    return { isLoading, user };
  });

  useEffect(() => {
    const unsubscribe = authListener((user) => {
      setAuthInfo({ user, isLoading: false });
    });

    return unsubscribe;
  }, []);

  return authInfo;
};
