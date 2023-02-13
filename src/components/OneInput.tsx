"use client";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { useForm, UseFormProps, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CompanyEmailValidator from "company-email-validator";
import { SupabaseClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { Label } from "./ui/label";
import { Highlight } from "./button";
import { ChevronIcon } from "./icons/chevron";

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

export default function OneInput({
  supabase,
  redirectTo,
}: {
  supabase?: SupabaseClient;
  redirectTo: string;
}) {
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
      const { error } = await supabase!
        .from("user_db")
        .upsert([{ user_email: data.email }]);
      setIsCompanyEmail(true);
      router.push(redirectTo);
    }
  });
  const [result, setResult] = useState({ email: "" });
  const [isCompanyEmail, setIsCompanyEmail] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div>
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
    </div>
  );
}
