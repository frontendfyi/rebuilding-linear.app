import { AnalyticsWrapper } from "../components/analytics";
import { Container } from "../components/container";
import { CopyrightLinearBanner } from "../components/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
          <CopyrightLinearBanner />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
