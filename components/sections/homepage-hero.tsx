import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="h-auto translate-y-[-1rem] animate-fade-in px-2 opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      Project Waitless 2023 Release <br className="block md:hidden" />
      <span className="mx-2 hidden md:block">-</span> Built for cost control{" "}
      <Highlight className="m-2">→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Inventory Management
      <br className="flex md:block" /> on the edge
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in space-y-4 opacity-0 [--animation-delay:400ms]">
      <span>
        Reduce inventory loss by 50%,
        <br className="block md:hidden" /> save 10 hours a week calculating
        stock.
      </span>
      <span>
        <br className="" /> Meet the new standard
        <br className="block md:hidden" /> for modern stock take.
        <br className="hidden md:block" />
      </span>
    </HeroSubtitle>
    <div className=" m-10 justify-center md:inline-flex md:h-[8vh] md:w-[25vw]">
      <input
        type="email"
        className="hover:text-shadow focus:text-shadow h-full w-full rounded-t-sm border-b-2 border-b-zinc-700 bg-blue-800/10 from-blue-800/5 to-purple-900/5 p-4 text-md font-thin tracking-wide text-slate-400 shadow-transparent-white transition-[shadow,text-shadow] hover:shadow-primary sm:text-md md:text-xl"
        autoComplete="on"
      />
    </div>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/contact-us"
      variant="primary"
      size="large"
    >
      Get Started{" "}
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
