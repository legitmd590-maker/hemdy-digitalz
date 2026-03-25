import { motion } from "framer-motion";
import heroPhoto from "@/assets/hero-photo.jpg";
import { Phone, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary blur-[150px]" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-0">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-secondary font-heading text-sm tracking-[0.25em] uppercase mb-4"
            >
              Digital Marketing Agency
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-[1.1]">
              Hemdy
              <br />
              <span className="text-gradient">Digitalz</span>
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/70 max-w-md font-body leading-relaxed">
            Elevating your brand with data-driven strategies, creative content, and cutting-edge digital marketing solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/2348137941463"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-gradient text-accent-foreground px-8 py-4 rounded-full font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="mailto:legitmd590@gmail.com"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-heading font-semibold text-sm tracking-wide hover:bg-primary-foreground/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-accent-gradient rounded-3xl opacity-20 blur-2xl" />
            <img
              src={heroPhoto}
              alt="Hemdy - Digital Marketing Expert"
              className="relative w-80 md:w-96 h-auto rounded-3xl object-cover shadow-elevated"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-5 h-5 text-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
