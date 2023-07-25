import { Heading } from "../components/Heading/Heading";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { AuthMessage } from "../components/AuthMessage/AuthMessage";

const SignUp = () => {
  return (
    <section>
      <Heading level={2}>Реєстрація</Heading>
      <RegisterForm />
      <AuthMessage message="Вже є акаунт?" linkText="Вхід" path="/login" />
    </section>
  );
};

export default SignUp;
