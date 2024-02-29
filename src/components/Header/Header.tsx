import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useSelector, useDispatch } from "react-redux";

import LOGO from "@img/logo.png";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { toggleForm } from "../../features/user/userSlice";

const Header = () => {
    const dispatch = useDispatch();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { currentUser } = useSelector((state: any) => state.user);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { cart } = useSelector((state: any) => state.user);

    const [user, setUser] = useState({id: "Guest"});

    useEffect(() => {
        if(!currentUser) return
        setUser(currentUser);
    }, [currentUser]);

    const handleClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
    }

	const [qty, setQty] = useState(0);

	useEffect(() => {
		const totalQty = cart.reduce((total: number, product: { quantity: number }) => {
			console.log(total, product.quantity);

			return total + product.quantity;
		}, 0);

        if(currentUser) {
            setQty(totalQty);
        }
	}, [cart, currentUser]);


	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='Logotype' />
				</Link>
			</div>

			<div className={styles.info}>
				<div className={styles.user} onClick={handleClick}>
					<div className={styles.suerName}>{user.id}</div>
					<svg className={styles.avatar}>
						<use xlinkHref={`/sprite.svg#user`} />
					</svg>
				</div>

				<div className={styles.account}>
					<Link to={ROUTES.CART} className={styles.cart}>
						<svg className={styles.iconCart}>
							<use xlinkHref={`/sprite.svg#bag`} />
						</svg>
						{qty > 0 && <span className={styles.count}>{qty}</span>}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
