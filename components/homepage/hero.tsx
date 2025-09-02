"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FadeInSection from "../animations/FadeInSection";
import FloatingElements from "../ui/FloatingElements";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[72vh] flex items-center overflow-hidden bg-[#040407] text-slate-100 py-32">
      {/* background layers */}
      <FloatingElements variant="circles" count={12} className="opacity-60" />
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#03040a] via-[#071021] to-[#020206] opacity-95"
          aria-hidden
        />

        {/* subtle neon nebulas */}
        <div
          className="absolute left-[-10%] top-[-15%] w-[60vw] h-[60vh] rounded-full blur-[140px] opacity-60"
          style={{ background: 'radial-gradient(circle at 10% 20%, rgba(0,255,255,0.12), transparent 12%), radial-gradient(circle at 80% 80%, rgba(255,0,255,0.08), transparent 15%)' }}
        />

        <div
          className="absolute right-[-8%] bottom-[-20%] w-[50vw] h-[50vh] rounded-full blur-[120px] opacity-50"
          style={{ background: 'radial-gradient(circle at 70% 10%, rgba(255,255,102,0.06), transparent 10%)' }}
        />

        {/* animated scanning lines */}
        <svg className="absolute inset-0 -z-20 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lg" x1="0" x2="1">
              <stop offset="0%" stopColor="#00fff0" stopOpacity="0" />
              <stop offset="50%" stopColor="#00fff0" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#00fff0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#lg)">
            <animate attributeName="x" from="-100%" to="100%" dur="18s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-[0_10px_40px_rgba(0,255,240,0.08)]">
                Cataleex — <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#00fff0] via-[#9b5cff] to-[#ffd44d]">Ignite. Launch. Accelerate.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                We speed up Web3 projects with product-first growth, smart token mechanics, and developer-grade integrations — think of us as rocket fuel for your protocol.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 text-base font-semibold bg-[linear-gradient(90deg,#00fff0_0%,#9b5cff_50%,#ffd44d_100%)] bg-clip-text text-transparent border border-white/5 shadow-[0_8px_40px_rgba(155,92,255,0.08)]"
                >
                  Explore our services
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium border border-[#ffffff14] bg-[#ffffff06] hover:bg-[#ffffff08]"
                >
                  Get in Touch
                </Link>
              </div>

              {/* feature chips */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { label: "Community growth in 30 days", hint: "Engagement + onboarding" },
                  { label: "User retention strategies", hint: "Feedback + gamification" },
                  { label: "Growth campaign orchestration", hint: "PR + influencers" },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/6 min-w-[220px]">
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#00fff0]/20 via-[#9b5cff]/18 to-[#ffd44d]/14 shadow-[0_6px_30px_rgba(155,92,255,0.06)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h6l3 8 3-16 3 12h4" stroke="white" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{f.label}</div>
                      <div className="text-[13px] text-slate-300">{f.hint}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>


          {/* Right: visual / mock */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-[360px] sm:w-[420px] lg:w-[520px]"
            >
              {/* neon device mockup */}
              <div className="rounded-2xl border border-white/6 p-6 bg-gradient-to-br from-[#071021]/60 via-[#06111a]/40 to-[#050409]/60 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                <FadeInSection direction="left">
                  <div className="relative h-[250px] grid-bg rounded-2xl bg-black neon-border overflow-hidden">
                    {/* Enhanced holographic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-2xl opacity-60" />
                    {/* <motion.div
                      className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-neon-purple/20 backdrop-blur-sm border border-white/10"
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      whileHover={{ scale: 1.15 }}
                    /> */}

                    {/* Enhanced blockchain visualization */}
                    <motion.div
                      className="absolute top-7 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.circle
                          cx="100" cy="100" r="80"
                          stroke="#8B5CF6" strokeWidth="1"
                          strokeDasharray="5 5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="100" cy="100" r="60"
                          stroke="#00B4DB" strokeWidth="1"
                          strokeOpacity="0.7" strokeDasharray="10 5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.circle
                          cx="100" cy="100" r="40"
                          stroke="#EC4899" strokeWidth="1"
                          strokeOpacity="0.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        />

                        {/* Enhanced nodes with hover effects */}
                        {[
                          { cx: 100, cy: 20, fill: "#8B5CF6" },
                          { cx: 100, cy: 180, fill: "#8B5CF6" },
                          { cx: 20, cy: 100, fill: "#00B4DB" },
                          { cx: 180, cy: 100, fill: "#00B4DB" },
                          { cx: 140, cy: 40, fill: "#EC4899" },
                          { cx: 60, cy: 160, fill: "#EC4899" },
                          { cx: 40, cy: 40, fill: "#10B981" },
                          { cx: 160, cy: 160, fill: "#10B981" }
                        ].map((node, index) => (
                          <motion.circle
                            key={index}
                            cx={node.cx}
                            cy={node.cy}
                            r="8"
                            fill={node.fill}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ scale: 1.5, r: 12 }}
                          />
                        ))}

                        {/* Animated connections */}
                        {[
                          { x1: 100, y1: 20, x2: 140, y2: 40 },
                          { x1: 100, y1: 20, x2: 40, y2: 40 },
                          { x1: 20, y1: 100, x2: 40, y2: 40 },
                          { x1: 180, y1: 100, x2: 140, y2: 40 },
                          { x1: 140, y1: 40, x2: 160, y2: 160 },
                          { x1: 40, y1: 40, x2: 60, y2: 160 },
                          { x1: 100, y1: 180, x2: 60, y2: 160 },
                          { x1: 100, y1: 180, x2: 160, y2: 160 }
                        ].map((line, index) => (
                          <motion.line
                            key={index}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="#8B5CF6"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 2 + index * 0.1, duration: 1 }}
                          />
                        ))}
                      </svg>
                    </motion.div>
                  </div>
                </FadeInSection>

                {/* The initial black background */}
                {/* <div className="rounded-xl overflow-hidden bg-[#03040a] p-4">
                  <div className="mt-4 bg-[#00000080] rounded-xl p-5">
                    
                  </div>
                </div> */}
              </div>

              {/* neon glow rings */}
              {/* <div className="absolute -right-8 -top-6 w-36 h-36 rounded-full blur-2xl opacity-70" style={{ background: 'conic-gradient(from 180deg, rgba(0,255,240,0.12), rgba(155,92,255,0.08), rgba(255,212,77,0.06))' }} />
              <div className="absolute -left-8 bottom-[-18%] w-28 h-28 rounded-full blur-xl opacity-60" style={{ background: 'radial-gradient(circle, rgba(155,92,255,0.08), transparent 45%)' }} /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
