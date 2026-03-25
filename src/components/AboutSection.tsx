import { motion } from "framer-motion";
import aboutPhoto from "@/assets/about-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-accent-gradient rounded-3xl opacity-10 blur-xl" />
            <img
              src={aboutPhoto}
              alt="About Hemdy"
              className="relative w-72 md:w-80 rounded-3xl object-cover shadow-elevated"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-secondary font-heading text-sm tracking-[0.25em] uppercase">About Me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Driving <span className="text-gradient">Results</span> That Matter
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate digital marketer with a knack for turning brands into online powerhouses. 
            From SEO and social media advertising to content creation and AI-driven strategies, 
            I bring a full-spectrum approach to growing your business online.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're a startup looking to establish your presence or an established brand 
            seeking to scale, I provide tailored solutions that deliver measurable results.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { num: "50+", label: "Clients" },
              { num: "100+", label: "Projects" },
              { num: "3+", label: "Years Exp." },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-heading font-bold text-gradient">{stat.num}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
