import * as React from "react";

import { cn } from "../../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "hover:text-shadow focus:text-shadow h-full w-full  translate-y-[-1rem]  animate-fade-in justify-center rounded-md border-0 bg-transparent p-4 text-md  font-normal tracking-wide text-slate-200 antialiased opacity-0 shadow-transparent-white ring-2 ring-slate-200/60 transition-[shadow,text-shadow] [--animation-delay:600ms]  hover:shadow-primary focus:ring-2 focus:ring-sky-300 sm:text-md md:text-xl",
          className
        )}
        ref={ref}
        {...props}
        autoComplete="on"
        type="email"
        placeholder="Email"
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
