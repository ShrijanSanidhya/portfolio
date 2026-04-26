import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { fadeUp } from "../../lib/motionVariants";
import { Mail, Phone, ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";

export function Contact() {
  const { contact } = portfolioData;
  const validSocials = contact.socials.filter((social) => social.url && social.url !== "#");

  return (
    <motion.section
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <span className="block font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-3">06 — CONTACT</span>
        <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight mb-2">
          <span className="text-text-primary">Let's Build </span>
          <span className="text-gradient bg-gradient-accent">Something</span>
        </h2>
        <p className="text-text-secondary font-sans text-base mt-2 mb-10">
          Open to internships, collaborations, and interesting problems.
        </p>
      </div>

      <div className="relative rounded-[22px] p-[1px] overflow-hidden">
        <motion.div
          className="absolute inset-[-200%]"
          style={{ background: "conic-gradient(from 0deg, #a855f7, #ec4899, #38bdf8, #a855f7)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        />

        <div className="relative bg-bg-card/95 rounded-[21px] p-8 md:p-10 z-10">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-card p-6 md:p-7 text-left"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-accent-dim border border-accent/20 text-accent-light font-mono text-[10px] uppercase tracking-wider mb-4">
                <Sparkles size={11} />
                Available now
              </div>
              <h3 className="text-text-primary text-xl font-bold tracking-tight mb-2">Start a conversation</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Best for internship opportunities, product collaboration, and AI/full-stack project work.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Email Me <ArrowUpRight size={14} />
              </a>
            </motion.div>

            <div className="glass rounded-card p-6 md:p-7 text-left">
              <div className="space-y-3">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent/35 hover:bg-bg-hover transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-accent-dim flex items-center justify-center text-accent-light"><Mail size={15} /></div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-text-tertiary uppercase">Email</p>
                    <p className="font-sans text-sm text-text-secondary group-hover:text-text-primary transition-colors truncate">{contact.email}</p>
                  </div>
                </a>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-pink/35 hover:bg-bg-hover transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-pink-dim flex items-center justify-center text-pink-light"><Phone size={15} /></div>
                  <div>
                    <p className="font-mono text-[10px] text-text-tertiary uppercase">Phone</p>
                    <p className="font-sans text-sm text-text-secondary group-hover:text-text-primary transition-colors">{contact.phone}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-border" />
            <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest">connect</span>
            <div className="flex-1 border-t border-border" />
          </div>

          <div className="flex justify-center flex-wrap gap-3">
            {validSocials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(168,85,247,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-full px-5 py-2.5 font-mono text-[11px] text-text-secondary hover:text-accent-light flex items-center gap-2 transition-all duration-300"
              >
                {social.name}
                <ExternalLink size={10} className="text-text-tertiary" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
