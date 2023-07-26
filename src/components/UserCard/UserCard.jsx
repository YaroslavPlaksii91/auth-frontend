import { useSelector } from "react-redux";

import { authSelectors } from "../../redux/auth";

import s from "./UserCard.module.css";

export const UserCard = () => {
  const { firstName, lastName, email, phone } = useSelector(
    authSelectors.getUser,
  );

  return (
    <article>
      <h2 className={s.title}>
        {firstName} {lastName}
      </h2>
      <p className={s.email}>{email}</p>
      <p className={s.phone}>{phone}</p>
    </article>
  );
};
