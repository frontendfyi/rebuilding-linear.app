import { SquareLogo } from "../logos/Square";
import Image from "next/image";
import MarketManPic from "../logos/marketman-invert.png";
import { LightSpeedLogo } from "../logos/lightspeed";
import { XeroLogo } from "../logos/xero";
import { DojoLogo } from "../logos/dojo";
import Planday from "../logos/planday.png";

export const Integration = () => (
  <>
    <p className="mb-12 text-center text-lg text-white antialiased md:text-xl">
      <span className="text-primary-text">
        Integrate with your existing tools and services.
      </span>
      <br className="hidden md:block" /> Upgrade without breaking changes.
    </p>

    <div className="flex flex-wrap items-center justify-around gap-x-6 gap-y-6 md:gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <SquareLogo className="brightness-200 contrast-200 backdrop-brightness-200" />
      <div className="justify-center bg-transparent md:py-6">
        <Image
          src={MarketManPic}
          width={200}
          height={150}
          className=""
          alt="Market Man is integrated with Project Waitless solution"
          placeholder="blur"
        />
      </div>
      <LightSpeedLogo />
      <XeroLogo />
      {/* <DojoLogo className="invert" /> */}
      <div className="md:ml-[-2]">
        <Image
          src={Planday}
          width={100}
          height={80}
          className=""
          alt="Planday is integrated with Project Waitless solution"
          placeholder="blur"
        />
      </div>

      {/* <PitchLogo className="hidden md:block" /> */}
    </div>
  </>
);
