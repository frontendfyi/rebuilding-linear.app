import { Container } from "../../components/container";
import { Logo } from "../../components/icons/logo";

export default function Brand() {
  return (
    <Container>
      <div className="flex min-h-[25vh] translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">Design Guide </h1>
        <div className="inline-flex justify-center">
          <p className="text-center text-lg">Brand Logo</p>
          <div className="relative">
            <div className="absolute inset-0 z-0 bg-cover bg-center">
              <Logo className="mr-4 h-4 w-4 " />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
