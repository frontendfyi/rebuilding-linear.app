"use client";
import { Label } from "../components/ui/label";
import { Container } from "./container";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../components/ui/hover-card";
import { useForm, UseFormProps, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // function onSubmit(e) {
  //   e.preventDefault();
  //   setForm(e.target.value);
  //   console.log("submitted");
  // }
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 py-2">
        <h1 className="text-center text-4xl font-bold">Contact Us</h1>
        <p className="text-center text-lg">
          We&apos; love to hear from you! Please fill out the form below and
          we&apos;ll get back to you as soon as possible.
        </p>
        <form
          className="mt-8 flex w-full max-w-lg flex-col items-center justify-center"
          action=""
        >
          <div className="mb-4 flex w-full flex-col gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              className="border py-2 px-3 text-gray-700"
              type="text"
              placeholder="Name"
              id="name"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              className="border py-2 px-3 text-gray-700"
              type="email"
              placeholder="Company Email"
              id="email"
            />
            <Label htmlFor="message">What would you like us to know?</Label>
            <Textarea className="border py-2 px-3 text-gray-700" id="message" />
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button
                  type="submit"
                  className="hover:[content='We will take you to schedule a meeting with us'] mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                >
                  Submit
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      Click on this button will take you to schedule a meeting
                      with us.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </form>
      </div>
    </>
  );
}
