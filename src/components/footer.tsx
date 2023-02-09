import Link from "next/link";
import { Container } from "./container";
import { DiscordIcon } from "./icons/discord";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Integrations", href: "#integrations" },
      // { title: "Pricing", href: "#pricing" },
      { title: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "/about-us" },
      { title: "Blog", href: "/blog" },
      { title: "Careers", href: "/career" },
      //  { title: "Customers", href: "/customers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Discord Community", href: "https://discord.gg/QGbFWDcTTM" },
      { title: "Contact", href: "/contact" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms and Conditions", href: "/terms-conditions" },
    ],
  },
  // {
  //   title: "Developers",
  //   links: [
  //     { title: "API", href: "/api-request" },
  //     { title: "Status", href: "/status" },
  //     { title: "GitHub", href: "/github" },
  //   ],
  // },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center space-x-4 text-grey">
            <span>
              <Link
                href="#hero"
                className="flex items-center space-x-4 text-grey"
              >
                <Logo className="mr-4 h-4 w-4 " />{" "}
                <strong className="transform transition hover:text-white">
                  Project Waitless
                </strong>
              </Link>
              <span className="mt-4 text-slate-200/70">
                Make Unforgettable Experiences Stand The Test Of Time &nbsp;
              </span>
            </span>
          </div>
          <div className="mt-auto hidden space-x-4 text-grey md:flex">
            <div className="w-64 h-64 relative mr-4 bg-red-100">
              <div className="absolute inset-0 z-0 bg-cover bg-center">
                <div className="font-extrathin mb-24 absolute inset-0 z-10 flex items-center justify-center text-xs text-slate-200/70 opacity-0 duration-300 hover:opacity-100">
                  Coming Soon
                </div>
                <TwitterIcon />
              </div>
            </div>

            <Link href="https://discord.gg/QGbFWDcTTM">
              <DiscordIcon />
            </Link>
            <SlackIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block transform text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="my-4 flex space-x-6">
          {" "}
          <span className="mr-4 text-slate-200/70">
            Direct Support Line: 020 4538 5045
          </span>
          <Link
            href="general@projectwaitless.io"
            className="mr-4 text-slate-200/70"
          >
            Email: general@projectwaitless.io
          </Link>
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-4 text-grey md:hidden ">
        <div className="w-64 h-64 relative mr-4 bg-red-100">
          <div className="absolute inset-0 z-0 bg-cover bg-center">
            <div className="font-extrathin mb-24 absolute inset-0 z-10 flex items-center justify-center text-xs text-slate-200/70 opacity-0 duration-300 hover:opacity-100">
              Coming Soon
            </div>
            <TwitterIcon />
          </div>
        </div>

        <Link
          href="https://discord.gg/QGbFWDcTTM"
          className="transform transition hover:brightness-125 "
        >
          <DiscordIcon />
        </Link>
        <SlackIcon />
      </div>
    </Container>
  </footer>
);
