import ContactForm from "../../components/ContactForm";
import { Container } from "../../components/container";

export default function Success() {
  return (
    <Container>
      <div className="mt-10 flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 space-y-4 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">About Us</h1>
        <div className="[&_a]:text-lg md:[&_a]:text-sm">
          <p className="inline-flex text-start text-lg font-normal text-slate-50">
            At Project Waitless, we are passionate about time and enjoyment. We
            are serious about creating real value, in the interconnected
            industries of art, hospitality and real estate.
          </p>
          <br />
          <br />
          <p className="inline-flex text-start text-lg">
            Venue operators and owners spend half the time finding information,
            making swift decisions to increase revenues and communicating with
            the team, business partners and customers.
          </p>
          <p className="inline-flex text-start text-lg">
            <br /> Our goal is to help you save time on redundant, tedious
            tasks, secure more bookings and optimise operations, so you can
            focus on creating genuine connections with key stakeholders,
            customers and critical business activities. And it has to be
            fun.That&apos;s the core of every product we are currently building
            and planning to build.
          </p>
          <p className="inline-flex text-start text-lg">
            <br /> Our team members come from Las Vegas Sands, AWS and Dell. At
            Project Waitless, we redesign venue management, event production and
            discover novel experiences for the next generation.‍‍ We traverse
            between hardware, software and novel technologies.
            <br />
          </p>
        </div>

        <ContactForm />
      </div>
    </Container>
  );
}
