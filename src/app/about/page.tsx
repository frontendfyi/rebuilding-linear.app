import ContactForm from "../../components/ContactForm";
import classNames from "classnames";
import { Container } from "../../components/container";
import { StarsIllustration } from "../../components/icons/stars";
import { HeroTitle } from "../../components/hero";
import supabase from "@/utils/supabase";

export default function Success() {
  return (
    <Container>
      <div className="mt-10 flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center py-2 opacity-0">
        <HeroTitle className="text-center text-4xl font-bold text-transparent">
          About Us
        </HeroTitle>
        <div
          className={classNames(
            "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[46rem] overflow-hidden",
            "[--color:#0089B1] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
            "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
          )}
        >
          <StarsIllustration />
        </div>
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
            customers and critical business activities. And it has to be fun.
            That&apos;s the core of every product we are currently building and
            planning to build.
          </p>
          <p className="inline-flex text-start text-lg">
            <br /> Our team members come from Las Vegas Sands, AWS and Dell. At
            Project Waitless, we redesign venue management, event production and
            discover novel experiences for the next generation.
            <br />
          </p>
        </div>

        <ContactForm supabase={supabase} props={undefined} />
      </div>
    </Container>
  );
}
