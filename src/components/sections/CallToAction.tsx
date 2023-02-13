"use client";
import { LogoBgWhiteBr } from "../icons/logo-bg-white-br";
import classNames from "classnames";
import { Container } from "../container";
import { Button } from "../button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Highlight } from "../button";
import { useState } from "react";
import { ChevronIcon } from "../icons/chevron";
import CompanyEmailValidator from "company-email-validator";
import { Sunset } from "../illustrations/sunset";
import { StarsIllustration } from "../icons/stars";
import { HeroSubtitle } from "../hero";

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

export default function CallToAction() {
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
    <>
      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] mt-1 h-[60rem] rotate-180 overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <Container>
        <div className=" flex h-auto translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-4 px-2 opacity-0">
          <div>
            <div className="group relative flex min-h-[10rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-full border border-transparent-white bg-glass-gradient p-4 text-center antialiased md:basis-[calc(33.33%-12px)] md:p-14">
              <div className="pointer-events-none absolute h-[-2.8rem] w-[100%]"></div>
              <LogoBgWhiteBr />
            </div>
          </div>
          <HeroSubtitle>
            Private beta open. Sign up to get early access.
          </HeroSubtitle>
          <div>
            <form action="" onSubmit={onSubmit}>
              <div className=" md:space-x-6">
                <div className=" my-3 flex translate-y-[-1rem] animate-fade-in flex-col justify-center space-y-2 border-0  [--animation-delay:600ms] md:inline-flex md:h-[8vh] md:w-[25vw]">
                  <Label htmlFor="email" className="sr-only hidden" />
                  <Input
                    id="email"
                    className=""
                    {...methods.register("email")}
                  />
                  <p className="mt-3 text-md font-normal text-red-500/80 ">
                    {methods.formState.errors?.email?.message}
                    {!isCompanyEmail && message}
                  </p>
                </div>
                <Button
                  className="translate-y-[-1rem] animate-fade-in antialiased opacity-0 [--animation-delay:600ms]"
                  // href="/contact"
                  variant="primary"
                  size="large"
                  type="submit"
                >
                  Access Private Beta{" "}
                  <Highlight>
                    <ChevronIcon />
                  </Highlight>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
