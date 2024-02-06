"use client"
import Info from "@/components/home/Info";
import Values from "@/components/home/Values";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/home/Projects";
import ContactUs from "@/components/home/ContactUs";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between px-5 lg:px-20 py-10">
        <Info />
        <Values />
        <Projects />
        <Testimonials />
        <ContactUs />
    </main>
  );
}
