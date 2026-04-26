import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Mail, Phone, ExternalLink } from "lucide-react";

export function Contact() {
  const { contact } = portfolioData;

  return (
    <motion.section 
      id="contact" 
      className="py-24 px-[5%] max-w-xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center">
        <SectionHeader 
          label="06 — CONTACT" 
          title="Let's Build Something" 
        />
      </div>

      {/* Card */}
      <div className="bg-card border border-border rounded-[12px] p-8 mt-12">
          
        {/* Contact Pills */}
        <div className="flex flex-col gap-3">
          <motion.a 
            href={`mailto:${contact.email}`}
            whileHover={{ x: 4 }}
            className="bg-surface border border-border rounded-[12px] p-4 flex items-center gap-4 cursor-pointer hover:border-border-hover transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-accent-dim text-accent shrink-0">
              <Mail size={18} />
            </div>
            <span className="font-mono text-sm text-text-secondary truncate">
              {contact.email}
            </span>
          </motion.a>

          <motion.a 
            href={`tel:${contact.phone}`}
            whileHover={{ x: 4 }}
            className="bg-surface border border-border rounded-[12px] p-4 flex items-center gap-4 cursor-pointer hover:border-border-hover transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-accent-dim text-accent shrink-0">
              <Phone size={18} />
            </div>
            <span className="font-mono text-sm text-text-secondary">
              {contact.phone}
            </span>
          </motion.a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 border-t border-border" />
          <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest">or find me on</span>
          <div className="flex-1 border-t border-border" />
        </div>

        {/* Social Pills */}
        <div className="flex justify-center flex-wrap gap-3">
          {contact.socials.map((social) => (
            <motion.a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, borderColor: 'rgba(59,130,246,0.3)' }} 
              whileTap={{ scale: 0.95 }}
              className="bg-surface border border-border rounded-pill px-5 py-2.5 font-mono text-[11px] text-text-secondary flex items-center gap-2 hover:text-text-primary transition-colors duration-200"
            >
              {social.name}
              <ExternalLink size={11} className="text-text-tertiary" />
            </motion.a>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
