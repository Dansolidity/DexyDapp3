import { createContext, useState } from "react";

export const AccountContext = createContext(null);

export const AccountProvider = ({children}) => {
  const [accounts, setAccounts] = useState([]);

  return (
    <AccountContext.Provider value={{ accounts, setAccounts }}>
      {children}
    </AccountContext.Provider>
  );
};
