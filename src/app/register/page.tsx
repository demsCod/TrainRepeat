import { UserRegistrationForm } from "../../components/forms/UserRegistrationForm";
import { BackgroundLayout } from "../../components/layout/BackgroundLayout";

export default function RegisterPage() {
  return (
    <BackgroundLayout variant="form">
      <UserRegistrationForm />
    </BackgroundLayout>
  );
}
