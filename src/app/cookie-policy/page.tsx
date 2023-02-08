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
      data-id="5d205abf-0536-48c2-b628-340e35bc2cc2"
      data-type="iframe"
    ></div>
  );
}
