import React, {  useState, ReactNode } from 'react';
import MyContext from "./context";

interface MyProviderProps {
  children: ReactNode;
}

const [value, setValue] = useState<any>([]);

const MyProvider: React.FC   <MyProviderProps> = ({ children }) => {
  
  
  return (
    <MyContext.Provider value={{ value, setValue}  }>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;