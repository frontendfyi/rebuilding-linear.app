"use client";
import { Container } from "../../components/container";
import React, { useEffect } from "react";
import Script from "next/script";

export default function TermsCondition() {
  return (
    <>
      <Script
        id="5d205abf-0536-48c2-b628-340e35bc2cc2"
        dangerouslySetInnerHTML={{
          __html: `!function(d, s, id) {
  var js, tjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://app.termly.io/document/cookie-policy/5d205abf-0536-48c2-b628-340e35bc2cc2";
  tjs.parentNode.insertBefore(js, tjs);
}(document, 'script', 'termly-jssdk')
      `,
        }}
        src="https://app.termly.io/document/cookie-policy/5d205abf-0536-48c2-b628-340e35bc2cc2"
      />
    </>
  );
}
