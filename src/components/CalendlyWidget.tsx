"use client";
import { InlineWidget } from "react-calendly";
export default function CalendlyWidget(props: {
  prefill:
    | {
        name?: string | undefined;
        email?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        location?: string | undefined;
        guests?: string[] | undefined;
        customAnswers?:
          | {
              a1?: string | undefined;
              a2?: string | undefined;
              a3?: string | undefined;
              a4?: string | undefined;
              a5?: string | undefined;
              a6?: string | undefined;
              a7?: string | undefined;
              a8?: string | undefined;
              a9?: string | undefined;
              a10?: string | undefined;
            }
          | undefined;
        date?: Date | undefined;
      }
    | undefined;
}) {
  return (
    <InlineWidget
      url="https://calendly.com/projectwaitless-team/demo-with-project-waitless"
      prefill={props.prefill}
      pageSettings={{
        backgroundColor: "#222326",
        primaryColor: "rgba(255, 255, 255, 0.08)",
        textColor: "#f7f8f8",
      }}
    />
  );
}
