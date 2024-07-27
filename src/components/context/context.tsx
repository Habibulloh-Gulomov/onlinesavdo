import React, { createContext, ReactNode, useReducer, useState } from "react";

interface MyContextType {
	value: any;
	setValue: (value: any) => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
	children: ReactNode;
}

// const initialValue = {
//   data: [] ,
//   filter: ''
// }

//i just tried to use reducer but i couldnt
// const reducer = (state = initialValue, action: any) => {
//    const {type, payload} = action
//    switch (type) {
//     case 'GET_DATA':
//       return { ...state, data:payload}
//       break;

//     default:
//       break;
//    }
// }

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
	const [value, setValue] = useState([]);

	return (
		<MyContext.Provider value={{ value, setValue }}>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
