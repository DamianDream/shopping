import { useDispatch, useSelector } from "react-redux";

import UserSignupForm from "./UserSignupForm";

import styles from "./User.module.css";
import { toggleForm } from "../../features/user/userSlice";

const UserForm = () => {
	const dispatch = useDispatch();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { showForm } = useSelector((state: { user: any }) => state.user);

const closeForm = () => dispatch(toggleForm(false));
const toggleCurrentFormType = (type: string) => dispatch(toggleForm(type)); // Fix: Add type argument to toggleForm

return showForm ? (
  <>
    <div className={styles.overlay} onClick={closeForm} />
      <UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
  </>
) : (
  <></>
);
};

export default UserForm;
