import Products from "../Products/Products"
import { useSelector } from 'react-redux'
import styles from "./Home.module.css"

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { productsList } = useSelector((state: any) => state.products);

  return (
    <div className={styles.wrapper}>
      <Products productsList={productsList} amount={12} />
    </div>
  );
}

export default Home
