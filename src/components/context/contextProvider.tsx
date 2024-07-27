import React, { useState, ReactNode } from "react";
import MyContext from "./context";

interface MyProviderProps {
	children: ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
	const [value, setValue] = useState<any>([]);

	return (
		<MyContext.Provider value={{ value, setValue }}>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
