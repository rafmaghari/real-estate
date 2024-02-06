"use client"
import Values from "@/components/home/Values";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/home/Projects";
import ContactUs from "@/components/home/ContactUs";
import Heading from "@/components/home/Heading";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between px-5 lg:px-20 py-10">
        <Heading />
        <Values />
        <Projects />
        <Testimonials />
        <ContactUs />
    </main>
  );
}
