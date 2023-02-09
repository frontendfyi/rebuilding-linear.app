import ContactForm from "../../components/ContactForm";
import { Container } from "../../components/container";

export default function Success() {
  return (
    <Container>
      <div className="flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 space-y-4 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">
          Documentation is under construction.{" "}
        </h1>
        <p className="text-center text-lg">
          While we are making sure the hardware is airtight and doesn&apos;t
          disappoint you in any circumstance... do you want a better control of
          your inventory?👇🏻
        </p>

        <ContactForm />
      </div>
    </Container>
  );
}
