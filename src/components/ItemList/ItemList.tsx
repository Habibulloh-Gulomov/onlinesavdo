import { useContext, useState } from "react";
import ItemCard from "../itemCard/ItemCard";
import { MyContext } from "../context/context";
import "./ItemList.css";
import Pagination from "../Pagination/Pagination";

const ItemList = (props: any) => {
	const context = useContext(MyContext);
	const trueValue = context?.value?.data ? context?.value.data : context?.value;
	let dataIn =
		props.data != undefined && trueValue != undefined
			? trueValue.filter((e: any) => e.category === props.data)
			: trueValue;

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentItems = dataIn.slice(startIndex, startIndex + itemsPerPage);

	if (!dataIn) {
		return <div className="loader"></div>;
	}
	return (
		<div className="container">
			<div className="list">
				{currentItems.length &&
					currentItems.map((e: any) => (
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
			<Pagination
				totalItems={dataIn.length}
				itemsPerPage={4}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default ItemList;
