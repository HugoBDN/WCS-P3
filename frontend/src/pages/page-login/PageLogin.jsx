// eslint-disable-next-line import/no-unresolved
import LoginForm from "../../components/login/LoginForm";

export default function PageLogin() {
  return (
    <main className="min-h-[calc(100vh-160px)] flex flex-wrap justify-center md:justify-between gap-4 p-4 ">
      <LoginForm />
    </main>
  );
}
