"use client";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { useForm, UseFormProps, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { ChevronIcon } from "../components/icons/chevron";
import { z } from "zod";
import { Highlight } from "./button";
import CompanyEmailValidator from "company-email-validator";
import CalendlyWidget from "./CalendlyWidget";

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
  email: z.string().email(),
});

export default function LoginForm() {
  const router = useRouter();
  const methods = useZodForm({
    schema,
    defaultValues: {
      email: "",
    },
  });
  const [result, setResult] = useState({
    email: "",
  });

  const [message, setMessage] = useState("");
  // render a meeting booking link to the user if the email is not registered in our database
  const [showCalendly, setShowCalendly] = useState(false);

  const onSubmit = methods.handleSubmit(async (data) => {
    setResult(data); // send to backend or smth
    const { data: user, error } = await supabase
      .from("pw_user_db")
      .select("user_email")
      .textSearch("user_email", data.email);
    if (user) {
      router.push("/sign-up");
    } else if (!user) {
      const { data: unregisteredUser, error } = await supabase
        .from("user_db")
        .insert([
          {
            user_email: data.email,
          },
        ]);
      setShowCalendly(true);
      router.push("/sign-up");
    }
  });

  return (
    <>
      <div className="flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-2 opacity-0">
        <h1 className="text-center text-4xl font-bold">Log In</h1>
        <p className="text-center text-lg">The start of better control.</p>
        <div className="flex flex-col items-center justify-center gap-3">
          <form
            className="mt-8 flex w-full max-w-lg flex-col items-center justify-center"
            action=""
            onSubmit={onSubmit}
          >
            <div className="mb-4 flex w-full flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                className="border py-2 px-3 text-gray-700"
                type="email"
                placeholder="Company Email"
                id="email"
                autoComplete="on"
                {...methods.register("email")}
              />
              <p className="font-medium text-red-500">
                {methods.formState.errors?.email?.message}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="submit"
                    className="hover:[content='We will take you to schedule a meeting with us'] mt-4 items-center rounded bg-blue-500 py-3 px-4 text-center font-semibold text-white hover:bg-blue-700"
                    variant="primary"
                    size="large"
                    id="submit"
                  >
                    Log In
                    <Highlight>
                      <ChevronIcon />
                    </Highlight>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <CalendlyWidget
                    prefill={{
                      email: result.email,
                      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
