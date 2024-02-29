/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

import styles from "./User.module.css";

interface UserSignUpFormProps {
  toggleCurrentFormType: (formType: string) => void;
  closeForm: () => void;
}

const UserSignUpForm: React.FC<UserSignUpFormProps> = ({ closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }: { target: { value: string, name: string } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(createUser(values) as any);

    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Sign Up</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input type="email" placeholder="Your email" name="email" value={values.email} autoComplete="off" onChange={handleChange} required />
        </div>

        <div className={styles.group}>
          <input type="text" placeholder="Your name" name="username" value={values.username} autoComplete="off" onChange={handleChange} required />
        </div>

        <div className={styles.group}>
          <input type="password" placeholder="Your password" name="password" value={values.password} autoComplete="off" onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignUpForm;
