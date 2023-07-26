import { useDispatch } from "react-redux";

import { authOperations } from "../redux/auth";
import { Heading } from "../components/Heading/Heading";
import { UserCard } from "../components/UserCard/UserCard";
import { Button } from "../components/Button/Button";

const User = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <section>
      <Heading level={2}>Профіль</Heading>
      <UserCard />
      <Button type="button" onClick={handleClick}>
        Вийти
      </Button>
    </section>
  );
};

export default User;
