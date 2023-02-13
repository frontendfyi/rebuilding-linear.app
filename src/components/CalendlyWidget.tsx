"use client";
import { InlineWidget } from "react-calendly";

export const Success = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold">Awesome 🙌🏻</h1>
      <p className="text-center text-lg">We will see you soon!</p>
    </div>
  );
};
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
  function isCalendlyEvent(e: MessageEvent) {
    return (
      e.origin === "https://calendly.com" &&
      e.data.event &&
      e.data.event.indexOf("calendly.") === 0
    );
  }

  window.addEventListener("message", function (e) {
    if (isCalendlyEvent(e)) {
      /* Example to get the name of the event */
      console.log("Event name:", e.data.event);

      /* Example to get the payload of the event */
      console.log("Event details:", e.data.payload);
    }
  });

  return (
    <InlineWidget
      url="https://calendly.com/projectwaitless-team/demo-with-project-waitless?hide_gdpr_banner=1"
      prefill={props.prefill}
      pageSettings={{
        backgroundColor: "#222326",
        primaryColor: "rgba(255, 255, 255, 0.08)",
        textColor: "#f7f8f8",
      }}
    />
  );
}
