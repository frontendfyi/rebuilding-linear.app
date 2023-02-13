"use client";
import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { useForm, UseFormProps, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { z } from "zod";
import CompanyEmailValidator from "company-email-validator";
import { useRouter } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";
import OneInput from "../OneInput";

export const HomepageHero = () => {
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
      <OneInput redirectTo="/contact" />
      <HeroImage />
    </Hero>
  );
};
