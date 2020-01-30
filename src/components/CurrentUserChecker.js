import { useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { CurrentUserContext } from "../context/currentUser";
import useLocalStorage from "../hooks/useLocalStorage";

export default ({ children }) => {
  const [{ response }, doFetch] = useFetch("/user");
  const [, setUserState] = useContext(CurrentUserContext);
  const [token] = useLocalStorage("token");

  useEffect(() => {
    if (!token) {
      setUserState(state => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null
      }));

      return;
    }

    doFetch();
    setUserState(state => ({
      ...state,
      isLoading: true
    }));
  }, [token, setUserState, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }
    setUserState(state => ({
      ...state,
      currentUser: response,
      isLoggedIn: true,
      isLoading: false
    }));
  }, [response, setUserState]);

  return children;
};
