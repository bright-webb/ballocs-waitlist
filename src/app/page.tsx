import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DashboardImage from "@/components/dashboard-image";
import { Collaborate } from "@/components/collaborate";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Faqs from "@/components/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Collaborate />
      <Faqs />
    </>
  );
}
