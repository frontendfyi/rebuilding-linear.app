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
      data-id="05ef96bf-ba95-4564-b2f6-960382cd8c4a"
      data-type="iframe"
    ></div>
  );
}

<div name="termly-embed" data-id="05ef96bf-ba95-4564-b2f6-960382cd8c4a" data-type="iframe"></div>
<script type="text/javascript">(function(d, s, id) {
  var js, tjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://app.termly.io/embed-policy.min.js";
  tjs.parentNode.insertBefore(js, tjs);
}(document, 'script', 'termly-jssdk'));</script>