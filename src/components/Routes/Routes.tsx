import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import HOME from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";

const AppRoutes = () => (
	<Routes>
		<Route index element={<HOME />} />
		<Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
		<Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
	</Routes>
);

export default AppRoutes;
