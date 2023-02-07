"use client";
import { Container } from "../../components/container";
import React, { useEffect } from "react";

export default function TermsCondition() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-name="termly-embed"
      data-id="efdd15c4-7938-4d58-a0d2-44f757f243cd"
      data-type="iframe"
    ></div>
  );
}
