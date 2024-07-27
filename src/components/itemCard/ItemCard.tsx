import star from "../../assets/img/star.png"
import "./ItemCard.css";

const ItemCard = (props: any) => {
  const {id,img,title,count,description,rate,price} = props
	return (
		<li
			className="card"
			id={id}>
			<div className="card-cover">
				<img
					src={img}
					alt=""
					className="card-img"
				/>
				<p className="card-title">{title}</p>
				<div className="rated">
					<p className="rates">
						<img
            src={star}
							width={16}
							alt="image of item"
						/>{" "}
						{rate} <span className="rate-num">({count} rated)</span>
					</p>
					<p className="card-price">{price} $</p>
				</div>
				{/* <p className='card-description'>{description}</p> */}
			</div>
		</li>
	);
};

export default ItemCard;