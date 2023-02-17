"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Issue tracking
            <br />
            you'll enjoy using
          </>
        }
        image="/issues.webp"
        text="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Parent and sub-issues.",
            text: "Break larger takss into smaller issues",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Automated backlog.",
            text: "Linear will auto-close and auto-archive issues.",
          },
          {
            icon: WorkflowsIcon,
            title: "Custom workflows",
            text: "Define unique issue states for each team.",
          },
          {
            icon: CustomViewsIcon,
            title: "Filters and custom views.",
            text: "See only what's relevant for you.",
          },
          {
            icon: DiscussionIcon,
            title: "Discussion.",
            text: "Collaborate on issues without losing context.",
          },
          {
            icon: IssuesIcon,
            title: "Issue templates.",
            text: "Guide your team to write effective issues.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "List and board",
            text: "Switch between list and board layout to view work from any angle.",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Make it yours",
            text: "Quickly apply filters and operators to refine your issue lists and create custom views.",
          },
        ]}
      />
    </Features>
  );
};
