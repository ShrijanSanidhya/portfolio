import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";
import { fadeUp } from "../../lib/motionVariants";
import { SectionHeader } from "../ui/SectionHeader";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 px-[5%] max-w-[1400px] mx-auto border-t border-glass-border">
      <div ref={ref} className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="md:w-1/2">
          <SectionHeader number="06" title="Let's Build Something" />
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[1.1rem] text-muted mb-10 max-w-[480px]"
          >
            I'm currently open for internships and freelance opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-cyan group-hover:bg-cyan/10 transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-dm text-white group-hover:text-cyan transition-colors">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-purple group-hover:bg-purple/10 transition-colors">
                <Phone size={20} />
              </div>
              <span className="font-dm text-white group-hover:text-purple transition-colors">{contact.phone}</span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:w-1/3 flex flex-col gap-4 justify-end"
        >
          <span className="font-mono text-[0.7rem] text-muted uppercase tracking-widest mb-2">Socials</span>
          {contact.socials.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-xl glass-card hover:bg-white/5 transition-colors group"
            >
              <span className="font-syne font-bold text-white">{social.name}</span>
              <ArrowUpRight size={20} className="text-muted group-hover:text-white transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
