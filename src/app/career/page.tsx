import ContactForm from "../../components/ContactForm";
import { Container } from "../../components/container";
import supabase from "@/utils/supabase";

export default function Success() {
  return (
    <Container>
      <div className="flex min-h-[25vh] translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">
          Sorry we are not hiring at the moment.{" "}
        </h1>
        <p className="text-center text-lg">
          However if you are intrigued...go ahead👇🏻
        </p>
      </div>
      <ContactForm supabase={supabase} props={undefined} />
    </Container>
  );
}
