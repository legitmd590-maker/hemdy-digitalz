import { motion } from "framer-motion";
import { Phone, Mail, Facebook } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "08137941463",
    href: "https://wa.me/2348137941463",
  },
  {
    icon: Mail,
    label: "Email",
    value: "legitmd590@gmail.com",
    href: "mailto:legitmd590@gmail.com",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Hemdy Digitalz",
    href: "https://facebook.com/hemdydigitalz",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-hero-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-heading text-sm tracking-[0.25em] uppercase mb-3">
            Let's Work Together
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center gap-4 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <c.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-center">
                <p className="text-primary-foreground/60 text-sm">{c.label}</p>
                <p className="text-primary-foreground font-heading font-semibold text-sm mt-1">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
