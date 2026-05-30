import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DisclaimerModal } from "./DisclaimerModal";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DisclaimerModal />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}