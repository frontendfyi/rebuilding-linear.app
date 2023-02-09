"use client";
import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { useForm, UseFormProps, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
//import { supabase } from "../../utils/supabase";
import { useState } from "react";
import { z } from "zod";
import CompanyEmailValidator from "company-email-validator";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  {
    global: { fetch: fetch.bind(globalThis) },
  }
);

function useZodForm<TSchema extends z.ZodType>(
  props: Omit<UseFormProps<TSchema["_input"]>, "resolver"> & {
    schema: TSchema;
  }
) {
  const form = useForm<TSchema["_input"]>({
    ...props,
    resolver: zodResolver(props.schema, undefined),
  });

  return form;
}
const schema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export const HomepageHero = () => {
  const router = useRouter();
  const methods = useZodForm({
    schema,
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = methods.handleSubmit(async (data: any) => {
    setResult(data); // send to backend or smth
    if (!CompanyEmailValidator.isCompanyEmail(data.email)) {
      setIsCompanyEmail(false);
      setMessage("Um...enter a company email please?");
      return;
    } else if (CompanyEmailValidator.isCompanyEmail(data.email)) {
      const { data: user_db, error } = await supabase
        .from("user_db")
        .upsert([{ user_email: data.email }]);
      setIsCompanyEmail(true);
      router.push("/contact");
    }
  });

  const [result, setResult] = useState({ email: "" });
  const [isCompanyEmail, setIsCompanyEmail] = useState(false);
  const [message, setMessage] = useState("");
  return (
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
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in  opacity-0 [--animation-delay:400ms]">
        <span>
          Reduce inventory loss by 50%,
          <br className="block md:hidden" /> save 10 hours average a week
          calculating stock.
        </span>
        <span>
          <br className="" /> Meet the new standard
          <br className="block md:hidden" /> for modern stock take.
          <br className="hidden md:block" />
        </span>
      </HeroSubtitle>
      <form action="" onSubmit={onSubmit}>
        <div className=" m-14 inline-flex translate-y-[-1rem] animate-fade-in flex-col justify-center border-0 [--animation-delay:600ms] md:h-[8vh] md:w-[25vw]">
          <Label htmlFor="email" className="sr-only hidden" />
          <Input id="email" className="" {...methods.register("email")} />
          <p className="mt-3 text-md font-normal text-red-500/80 ">
            {methods.formState.errors?.email?.message}
            {!isCompanyEmail && message}
          </p>
        </div>

        <Button
          className=" translate-y-[-1rem] animate-fade-in antialiased opacity-0 [--animation-delay:600ms]"
          // href="/contact"
          variant="primary"
          size="large"
          type="submit"
        >
          Get Started{" "}
          <Highlight>
            <ChevronIcon />
          </Highlight>
        </Button>
      </form>
      <HeroImage />
    </Hero>
  );
};
