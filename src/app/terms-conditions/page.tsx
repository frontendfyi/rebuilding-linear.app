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
      data-id="a6491ea4-d460-43ac-8c66-85b7dba5e115"
      data-type="iframe"
    ></div>
  );
}
