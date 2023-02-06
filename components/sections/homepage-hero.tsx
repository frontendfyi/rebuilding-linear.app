import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      Project Waitless 2023 Release – Built for cost control{" "}
      <Highlight className="m-2">→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Inventory Management
      <br className="flex md:block" /> on the edge
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Reduce inventory loss by 50%, save 10 hours a week calculating stock.
      <br className="hidden md:block" /> Meet the new standard for modern stock
      take.
      <br className="hidden md:block" />
    </HeroSubtitle>
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
