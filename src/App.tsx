import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import MyContext from "./components/context/context";
import ItemList from "./components/ItemList/ItemList";
import axios from "axios";
import ItemFilter from "./components/filter/ItemFilter";
import RoutePage from "./components/RoutePage/routepage";

function App() {
	const context = useContext(MyContext);
	const { value, setValue }: any = context;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://fakestoreapi.com/products");
				if (!response.data) {
					throw new Error("Network response was not ok");
				}
				setValue(response);
			} catch (error: any) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
   console.log(context);
   
	return (
		<div className="App">
			<Header />
      <ItemFilter/>
			<RoutePage/>
		</div>
	);
}

export default App;
