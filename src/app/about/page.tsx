import ContactForm from "../../components/ContactForm";
import { Container } from "../../components/container";

export default function Success() {
  return (
    <Container>
      <div className="flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 space-y-4 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">About Us</h1>
        <p className="text-center text-lg">
          At Project Waitless, we are passionate about time and enjoyment. We
          are serious about creating real value, in the interconnected
          industries of art, hospitality and real estate.
          <br />
          Venue operators and owners spend half their time finding information,
          making swift decisions to increase revenues and communicating with the
          team, business partners and customers.
          <br /> Our goal is to help them save time on redundant, tedious tasks,
          secure more bookings and optimise operations, so they can focus on
          creating genuine connections with key stakeholders, customers and
          critical business activities. And it has to be fun.That&apos;s the
          core of every product we are building and planning to build.
          <br /> Our team members come from Las Vegas Sands, AWS and Dell.At
          Project Waitless, you will redesign venue management, event production
          and discover novel experiences for the next generation.‍‍
          <br />
        </p>
        <ContactForm />
      </div>
    </Container>
  );
}
