import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ReverseOsmosisExplainer } from "@/components/ReverseOsmosisExplainer";
import { Pricing } from "@/components/Pricing";
import { Products } from "@/components/Products";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.05}>
          <ReverseOsmosisExplainer />
        </Reveal>
        <Reveal delay={0.05}>
          <Features />
        </Reveal>
        <Reveal delay={0.05}>
          <Products />
        </Reveal>
        <Reveal delay={0.05}>
          <Pricing />
        </Reveal>
        <Reveal delay={0.05}>
          <Testimonials />
        </Reveal>
        <Reveal delay={0.05}>
          <FAQ />
        </Reveal>
        <Reveal delay={0.05}>
          <LeadForm />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
