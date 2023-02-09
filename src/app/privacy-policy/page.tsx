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
    <Container>
      <div className="m-14 flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-start gap-3 p-14 py-2 opacity-0">
        <h1 className=" text-start text-4xl font-bold">Terms and Conditions</h1>
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <div
          data-name="termly-embed"
          data-id="05ef96bf-ba95-4564-b2f6-960382cd8c4a"
          data-type="iframe"
        ></div>
      </div>
    </Container>
  );
}
