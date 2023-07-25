import { Heading } from "../components/Heading/Heading";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { AuthMessage } from "../components/AuthMessage/AuthMessage";

const SignIn = () => {
  return (
    <section>
      <Heading level={2}>Вхід</Heading>
      <LoginForm />
      <AuthMessage
        message="Ще не зареєстровані?"
        linkText="Реєстрація"
        path="/signup"
      />
    </section>
  );
};

export default SignIn;
