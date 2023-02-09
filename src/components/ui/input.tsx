import * as React from "react";

import { cn } from "../../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full translate-y-[-1rem] animate-fade-in rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm opacity-0 [--animation-delay:400ms] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50  dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
          className
        )}
        ref={ref}
        {...props}
        autoComplete="on"
        type={props.type}
        placeholder={props.placeholder}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
