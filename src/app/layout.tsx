import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
import Inter from "@next/font/google";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createServerClient } from "../utils/supabase-server";

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
