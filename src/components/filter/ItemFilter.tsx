import { useRef, useState } from "react";
import "./ItemFilter.css";

const ItemFilter = ({ rate, setRate }: any) => {
	const [num, setNum] = useState(0);
	let startCost: any = useRef();
	let endCost: any = useRef();

	const descrease = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (num > 0) {
			setNum(num - 0.5);
		}
	};

	const increase = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		if (num < 5) {
			setNum(num + 0.5);
		}
	};

	const [modal, setModal] = useState(false);
	const filterFunc = () => {
		setModal(!modal);
	};
	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	const filterHandle = (e: any) => {
		e.preventDefault();
		setRate({
			num: num,
			start: startCost.current.value,
			end: endCost.current.value,
		});
		setModal(!modal);
	};
	return (
		<div className="container">
			<button
				onClick={filterFunc}
				className="filter-btn">
				Filter
			</button>
			{modal && (
				<>
					<div className="login-background"></div>
					<div className="filter-cover">
						<form
							action="post"
							className="rate-form">
							<div className="rate-box">
								<p className="filter-title">Rate:</p>
								<button
									type="button"
									onClick={increase}
									className="rate-btn">
									+
								</button>
								<span className="rate-num">{num}</span>
								<button
									type="button"
									onClick={descrease}
									className="rate-btn">
									-
								</button>
							</div>
							<div className="price-box">
								<p className="price-from">Start cost:</p>
								<input
									className="price-input"
									type="number"
									ref={startCost}
									placeholder="from"
									defaultValue={0}
								/>
								<p className="price-to">To: </p>
								<input
									className="price-input"
									type="number"
									ref={endCost}
									placeholder="to"
									defaultValue={1000}
								/>
							</div>
							<button
								className="rate-submit"
								onClick={filterHandle}>
								Sort
							</button>
						</form>
					</div>
				</>
			)}
		</div>
	);
};

export default ItemFilter;
