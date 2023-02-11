import { Button, Highlight } from "../button";
import { CommandMenu } from "../command-menu";
import { Container } from "../container";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../keyboard-shortcuts";

export const UnlikeAnyTool = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Unlike any tool
          <br className="hidden md:inline-block" /> you've used before
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <KeyboardShortcuts />
          <p className="mb-4 text-3xl">Built for your keyboard</p>
          <p className="text-md text-primary-text">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="mb-4 text-3xl">Breathtakingly fast</p>
          <p className="text-md text-primary-text">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="pointer-events-none absolute top-[-8rem] w-[130%]">
            <LogoLightIllustration />
          </div>
          <p className="mb-4 text-3xl">Designed for modern software teams</p>
          <p className="text-md text-primary-text">
            Comes with built-in workflows that create focus and routine.
          </p>
          <Button
            className="absolute bottom-[20rem] translate-y-[30%] scale-[0.8] opacity-0 transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100 [&_.highlight]:text-[1.1rem]"
            variant="secondary"
            size="small"
            href="/"
          >
            <Highlight>Linear Method</Highlight>
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
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <CommandMenu />
          <div className="transition-opacity md:[.opened+&]:opacity-0">
            <p className="mb-4 text-3xl">Meet your command line</p>
            <p className="text-md text-primary-text">
              Complete any action in seconds with the global command menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
