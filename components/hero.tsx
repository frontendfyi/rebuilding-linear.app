interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return <h1 className="my-6 text-5xl">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className="mb-12 text-lg">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
