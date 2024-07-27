import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import { MyContext } from "./components/context/context";
import axios from "axios";
import ItemFilter from "./components/filter/ItemFilter";
import RoutePage from "./components/RoutePage/routepage";

function App() {
	const context = useContext(MyContext);
	const [rate, setRate]: any = useState({});
	const { value, setValue }: any = context;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://fakestoreapi.com/products");
				if (!response.data) {
					throw new Error("Network response was not ok");
				}
				setValue(response);
				if (rate.num > 0) {
					setValue(
						response.data.filter(
							(e: { rating: { rate: number }; price: number }) =>
								e.rating.rate > rate.num &&
								e.price > rate.start - 0 &&
								e.price < rate.end - 0
						)
					);
				} else {
					setValue(response);
				}
			} catch (error: any) {
				console.log(error);
			}
		};
		fetchData();
	}, [rate.num]);
	return (
		<div className="App">
			<Header />
			<ItemFilter {...{ rate, setRate }} />
			<RoutePage />
		</div>
	);
}

export default App;
