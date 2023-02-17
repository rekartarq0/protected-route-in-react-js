import { createContext, useContext, useState } from "react";

const stateContex = createContext({
  user: null,
  token: null,
  setuser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [token, _setToken] = useState(null);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCES_TOKEN");
    }
  };
  return (
    <stateContex.Provider
      value={{
        user,
        token,
        setuser,
        setToken,
      }}>
      {children}
    </stateContex.Provider>
  );
};

export const useContextprovider = () => useContext(stateContex);
// export function useContextprovider() {
//     useContext(stateContex);
// }
