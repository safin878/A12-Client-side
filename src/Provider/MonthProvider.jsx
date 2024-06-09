import { createContext, useState } from "react";

export const MonthContext = createContext();

const MonthProvider = ({ children }) => {
  const [month, setMonth] = useState("");
  return (
    <MonthContext.Provider value={{ month, setMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthProvider;
