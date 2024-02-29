import { Link } from "react-router-dom";
import styles from "./Products.module.css";

interface Product {
	id: number;
	title: string;
	image: string;
	category: string;
	price: number;
	rating: {
		rate: number;
	};
}

interface ProductsProps {
	title?: string;
	style?: { [index: string]: string };
	productsList: Product[];
	amount?: number;
}

const Products = ({ title, style = {}, productsList = [], amount = 20 }: ProductsProps) => {
	const list = productsList.filter((_, index) => index < amount);

	return (
		<section className={styles.products} style={style}>
			{title && <h2>{title}</h2>}
			<div className={styles.list}>
				{list.map(({ id, title, image, category, price, rating: { rate } }) => (
					<Link to={`/products/${id}`} key={id} className={styles.product}>
						<div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
						<div className={styles.wrapper}>
							<h3 className={styles.title}>{title}</h3>
							<div className={styles.category}>{category}</div>
							<div className={styles.footer}>
								<div className={styles.price}>{price}$</div>
								<div className={styles.rating}>{rate}</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Products;
