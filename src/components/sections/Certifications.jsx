import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { CalendarDays, Expand, X } from "lucide-react";

export function Certifications() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <motion.section
        id="certifications"
        className="py-24 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader label="05 — CERTS" title="Certified & Learning" />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          {portfolioData.certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div key={cert.title} variants={fadeUp} custom={index}>
                <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="h-44 relative overflow-hidden group text-left"
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    <div className="absolute inset-0 flex items-end justify-between p-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/45 text-white/90 font-mono text-[10px] backdrop-blur-sm">
                        <Expand size={11} /> Click to view
                      </span>
                      <Icon size={20} className="text-white/85" />
                    </div>
                  </button>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-flex w-fit px-2.5 py-1 bg-accent-dim border border-accent/20 rounded-md font-mono text-[10px] text-accent-light">
                      {cert.issuer}
                    </span>
                    <h3 className="font-bold text-base text-text-primary mt-3 mb-2">{cert.title}</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed flex-1">{cert.description}</p>

                    <div className="flex items-center gap-1.5 mt-4 font-mono text-[11px] text-text-tertiary">
                      <CalendarDays size={12} /> {cert.date}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-bg-surface border border-border text-text-tertiary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm px-4 py-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.button
              type="button"
              onClick={() => setActiveCert(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close certificate preview"
            >
              <X size={18} />
            </motion.button>

            <motion.div
              className="max-w-5xl w-full"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeCert.image}
                alt={`${activeCert.title} full certificate`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl border border-white/15 shadow-2xl"
              />
              <p className="text-center text-white/75 font-mono text-[11px] mt-3">
                {activeCert.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
