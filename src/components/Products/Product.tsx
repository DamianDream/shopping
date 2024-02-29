import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import styles from "./Product.module.css";
import { addItemToCart } from "../../features/user/userSlice";

interface ProductProps {
	image: string;
	title: string;
	price: number;
	description: string;
	rating: {
		rate: number;
		count: number;
	};
}

const Product = (item: ProductProps) => {
    const { image, title, price, description, rating } = item;

	const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItemToCart(item))
    }

	return (
		<section className={styles.product}>
			<div className={styles.images}>
				<div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
			</div>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
				<div className={styles.price}>{price}$</div>
				<div className={styles.details}>
					{rating && (
						<>
							<div className={styles.rate}>
								Rating: <span>{rating.rate}</span>
							</div>
							<div className={styles.rate}>
								Count: <span>{rating.count}</span>
							</div>
						</>
					)}
				</div>

				<div className={styles.actions}>
					<button onClick={addToCart} className={styles.add} disabled={false}>
						Add to cart
					</button>
				</div>
				<Link to={ROUTES.HOME} className={styles.link}>
					Return to store
				</Link>
			</div>
		</section>
	);
};

export default Product;
