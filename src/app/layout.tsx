import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
import { Inter as FontSans } from "@next/font/google";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";
import { cn } from "../utils/cn";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createServerClient } from "../utils/supabase-server";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="font-[inter] antialiased">
      <div>
        <Header />

        <main className="bg-page-gradient pt-navigation-height">
          {children}
        </main>

        <Footer />
        {/* <CopyrightLinearBanner /> */}
      </div>

      <AnalyticsWrapper />
    </body>
  );
}
