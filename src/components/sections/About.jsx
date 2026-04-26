import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "../../lib/motionVariants";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { GraduationCap, MapPin, BriefcaseBusiness, Sparkles, PenTool } from "lucide-react";

const quickInfoIcons = {
  education: GraduationCap,
  location: MapPin,
  status: BriefcaseBusiness,
  current: Sparkles,
  creative: PenTool
};

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { personal } = portfolioData;

  const stats = [
    { num: "3+", label: "Projects Shipped" },
    { num: "2+", label: "Certifications" },
    { num: "10+", label: "Tech Tools" },
    { num: "1st", label: "Year @ NST" }
  ];

  return (
    <motion.section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader label="02 — ABOUT" title="Profile Overview" />

      <div ref={ref} className="mt-12">
        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -3 }}
              className="rounded-xl border px-4 py-5 transition-all duration-300"
              style={{
                background: "rgba(16,16,26,0.9)",
                borderColor: "rgba(255,255,255,0.09)"
              }}
            >
              <p className="text-text-primary font-display font-bold text-2xl sm:text-3xl leading-none">{stat.num}</p>
              <p className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.14em] mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div variants={slideLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <GlassCard
              topAccent
              whileHover={{ y: -4 }}
              className="h-full !bg-[rgba(18,18,30,0.95)] !border-[rgba(168,85,247,0.16)] !p-7 transition-all duration-300 hover:!border-[rgba(168,85,247,0.32)] hover:shadow-[0_14px_36px_rgba(168,85,247,0.14)]"
            >
              <span className="block font-mono text-[10px] text-accent-light uppercase tracking-[0.18em] mb-5">Who I Am</span>
              {personal.bio.map((p, i) => (
                <p key={i} className="text-text-secondary font-sans text-[15px] leading-[1.85] mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </GlassCard>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <GlassCard
              topAccent
              whileHover={{ y: -4 }}
              className="h-full !bg-[rgba(18,18,30,0.95)] !border-[rgba(236,72,153,0.16)] !p-7 transition-all duration-300 hover:!border-[rgba(236,72,153,0.3)] hover:shadow-[0_14px_36px_rgba(236,72,153,0.12)]"
            >
              <span className="block font-mono text-[10px] text-pink-light uppercase tracking-[0.18em] mb-5">Quick Info</span>
              {personal.quickInfo.map((info, i) => {
                const Icon = quickInfoIcons[info.icon] || Sparkles;
                return (
                  <div key={i} className="grid grid-cols-[36px_90px_1fr] items-center gap-3 py-3.5 border-b border-white/8 last:border-0 rounded-md px-1 transition-colors duration-200 hover:bg-white/[0.03]">
                    <span className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.12] flex items-center justify-center text-accent-light">
                      <Icon size={15} />
                    </span>
                    <span className="font-mono text-[10px] text-text-secondary uppercase">{info.label}</span>
                    <span className="font-sans text-[15px] text-text-primary/95 leading-snug">{info.value}</span>
                  </div>
                );
              })}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
