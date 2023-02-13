"use client";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import {
  useForm,
  UseFormProps,
  Controller,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays } from "lucide-react";
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

import clsx from "clsx";
import Script from "next/script";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { HeroSubtitle, HeroTitle } from "./hero";

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

const SOURCE = {
  GOOGLE: "Google Search",
  Other_Search: "Other Search Engine",
  Linkedin: "Linkedin",
  Medium: "Medium",
  Twitter: "Twitter",
  Conference: "Conference",
  Other: "Other",
} as const;

const schema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  text: z.string().min(10).max(1000),
  source: z.nativeEnum(SOURCE),
});

export default function ContactForm(props: any) {
  const router = useRouter();
  const methods = useZodForm({
    schema,
    defaultValues: {
      name: "",
      email: "",
      text: "",
      source: "Google Search",
    },
  });
  const [result, setResult] = useState({
    name: "",
    email: "",
    text: "",
    source: "Google Search",
  });
  const [isCompanyEmail, setIsCompanyEmail] = useState(false);
  const [message, setMessage] = useState("");
  const onSubmit = methods.handleSubmit(async (data) => {
    setResult(data); // send to backend or smth
    if (!CompanyEmailValidator.isCompanyEmail(data.email)) {
      setIsCompanyEmail(false);
      setMessage("Um...enter a company email please?");
      return;
    } else if (CompanyEmailValidator.isCompanyEmail(data.email)) {
      const { data: user_db, error } = await supabase.from("user_db").upsert([
        {
          user_email: data.email,
          user_name: data.name,
          marketing_source: data.source,
          contact_message: data.text,
        },
      ]);
      setIsCompanyEmail(true);
      console.log(error);
    }
  });

  return (
    <>
      <div className="flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-2 opacity-0">
        <HeroTitle className="text-center text-4xl font-bold">
          {isCompanyEmail ? "Book a meeting" : "Contact Us"}{" "}
        </HeroTitle>
        <p className="text-center text-lg">
          We&apos;d love to hear from you. Fill out the form below and
          we&apos;ll get back to you shortly.
        </p>
        <div className="flex flex-col items-center justify-center gap-3">
          <form
            className="mt-8 flex w-full max-w-lg flex-col items-center justify-center"
            action=""
            onSubmit={onSubmit}
          >
            <div className="mb-4 flex w-full flex-col gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                className="border py-2 px-3 text-gray-700"
                {...methods.register("name")}
                type="text"
                placeholder="Name"
                id="name"
                autoComplete="on"
              />
              <p className="font-medium text-red-500">
                {methods.formState.errors?.name?.message}
              </p>
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
                {!isCompanyEmail && message}
              </p>
              <Label htmlFor="message">What would you like us to know?</Label>
              <Textarea
                className="border py-2 px-3 text-gray-700"
                id="message"
                {...methods.register("text")}
              />
              <p className="font-medium text-red-500">
                {methods.formState.errors?.text?.message}
              </p>
              <Label htmlFor="source">How did you hear about us?</Label>
              <Controller
                control={methods.control}
                name="source"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-transparent">
                      <SelectValue placeholder="Select a source" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(SOURCE).map(([key, value]) => (
                        <SelectItem key={key} value={value} id={value}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              <p className="font-medium text-red-500">
                {methods.formState.errors?.source?.message}
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
                    Submit
                    <Highlight>
                      <ChevronIcon />
                    </Highlight>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <CalendlyWidget
                    prefill={{
                      name: result.name,
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
