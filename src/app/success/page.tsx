import { Container } from "../../components/container";

export default function Success() {
  return (
    <Container>
      <div className="flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">
          Thanks for getting in touch.
        </h1>
        <p className="text-center text-lg">We will get back to you shortly.</p>
      </div>
    </Container>
  );
}
