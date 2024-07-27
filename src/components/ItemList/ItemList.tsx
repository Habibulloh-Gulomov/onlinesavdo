import { useContext } from "react";
import ItemCard from "../itemCard/ItemCard";
import { MyContext } from "../context/context";
import "./ItemList.css";

const ItemList = (props: any) => {
	const context = useContext(MyContext);
	const value = context?.value?.data ? context?.value.data : context?.value;
	let dataIn =
		props.data != undefined && value != undefined
			? value.filter((e: any) => e.category === props.data)
			: value;

	if (!dataIn) {
		return <div className="loader"></div>;
	}
	return (
		<div className="container">
			<div className="list">
				{dataIn.length &&
					dataIn.map((e: any) => (
						<ItemCard
							key={e.id}
							id={e.id}
							img={e.image}
							title={e.title}
							description={e.description}
							rate={e.rating.rate}
							count={e.rating.count}
							price={e.price}
						/>
					))}
			</div>
		</div>
	);
};

export default ItemList;
