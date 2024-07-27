import axios from 'axios';
import React, { createContext, useContext, useEffect} from 'react';

interface MyContextType  {
  value: any;
  setValue: (value: any) => void;
}



const MyContext = createContext<MyContextType | undefined>(undefined);


export default MyContext

