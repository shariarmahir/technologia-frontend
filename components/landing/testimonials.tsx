"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "The IEEE paper they drafted passed a full turnitin + AI detection check. I've used three other services — none come close.",
    name: "Ishrat R.",
    role: "MSc · University of Manchester",
  },
  {
    quote:
      "Our school partnered for the science fair and the Level Up system is genuinely addictive for our students. Attendance in our project club doubled.",
    name: "Arefin Chowdhury",
    role: "Project Lab Coordinator · DRMC",
  },
  {
    quote:
      "The dashboard makes it easy to track every deliverable and the verified badge builds trust with our publishing desk.",
    name: "Dr. Tariq A.",
    role: "Research supervisor",
  },
  {
    quote:
      "IoT project plus an actual hardware build — shipped in 10 days with documentation. Wild.",
    name: "Nafis H.",
    role: "EEE · BUET",
  },
  {
    quote:
      "The bidding flow plus the Masum sir verification — that's what sold me. It feels serious.",
    name: "Mehreen S.",
    role: "MBA · NSU",
  },
  {
    quote:
      "I love that there's a Bangla toggle. Parents of our students can actually follow the achievement showcase.",
    name: "Head of Academics",
    role: "Partner school · Chattogram",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Trusted by students, schools & teams"
          align="center"
          title={
            <>
              Early results from our <span className="gradient-text">first movers.</span>
            </>
          }
          description="A selection of feedback from students we've worked with and schools we've partnered with."
          className="mx-auto"
        />
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee gap-5">
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.figure
              key={i}
              className="w-[340px] flex-shrink-0 rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[0_6px_24px_rgba(15,11,61,0.05)]"
            >
              <Quote className="h-5 w-5 text-[color:var(--color-accent)]" />
              <blockquote className="mt-3 text-sm leading-relaxed text-[color:var(--color-text-primary)]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1B1464] to-[#7C3AED] font-display text-xs font-semibold text-white">
                  {t.name[0]}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-[color:var(--color-primary-dark)]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
