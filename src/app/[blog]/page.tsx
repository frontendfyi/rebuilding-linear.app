import ContactForm from "../../components/ContactForm";
import { Container } from "../../components/container";

export default function Success() {
  return (
    <Container>
      <div className="flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">Coming Soon...</h1>
        <ContactForm />
      </div>
    </Container>
  );
}
