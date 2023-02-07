import { Button, Highlight } from "../button";
import { Container } from "../container";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../keyboard-shortcuts";

export const UnlikeAnyTool = () => (
  <div className=" text-white">
    <Container>
      <div className=" text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Unlike any tool
          <br className="hidden md:inline-block" /> you&apos;ve used before
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg font-normal text-primary-text antialiased md:mb-7 md:text-xl">
          Designed for hospitality venues with unforgiving precision, we
          combines everything possibly can
          <br className="block" /> to allow inventory control, with granularity.
        </p>
        {/* <div className="text-shadow mb-12 flex flex-col items-center justify-evenly gap-4 p-4 text-center text-2xl font-normal text-slate-200 antialiased md:mb-7 md:flex-row md:gap-6">
          <div className="ml-3">Hardware</div>
          <div className="ml-3">Artificial intelligence</div>
          <div className="ml-3">Edge Computing</div>{" "}
        </div> */}
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl"></p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center antialiased md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <KeyboardShortcuts />
          <p className="mb-4 text-3xl">Built for hospitality</p>
          <p className="text-md text-primary-text">
            Fly through your stock take. Monitor everything on both desktop and
            mobile.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center antialiased md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="mb-4 text-3xl">Optimised for control</p>
          <p className="text-md text-primary-text">
            Edge computing. Cloud. Internet-of-things. Sensor fusion. Artificial
            intelligence.
          </p>
        </div>
        <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center antialiased md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="pointer-events-none absolute top-[-8rem] w-[130%]">
            <LogoLightIllustration />
          </div>
          <p className="mb-4 text-3xl">Tailored for different scenarios</p>
          <p className="text-md text-primary-text">
            Beer keg. Dry storage. Fridge. Freezer. Wine cellar. Tilted shelf.
            We got it covered.
          </p>
        </div>
        <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <Button
            className="absolute bottom-[20rem] translate-y-[30%] scale-[0.8] opacity-0 transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100 [&_.highlight]:text-[1.1rem]"
            variant="secondary"
            size="small"
            href="/"
          >
            <Highlight>Speed and precision</Highlight>
            Product principles
            <svg
              className="ml-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#8A8F98"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </Button>
          <p className="mb-4 text-3xl antialiased">
            Meet the new standard for inventory control
          </p>
          <p className="text-md text-primary-text">
            No more false emails for low stock alert. The REAL real-time.
          </p>
        </div>
      </div>
    </div>
  </div>
);
