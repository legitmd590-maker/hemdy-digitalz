import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  Users,
  Facebook,
  Megaphone,
  PenTool,
  FileText,
  Sparkles,
} from "lucide-react";

const services = [
  { icon: Search, title: "SEO Optimization", desc: "Boost your search rankings and drive organic traffic" },
  { icon: BarChart3, title: "Market Analysis", desc: "Data-driven insights to inform your strategy" },
  { icon: Users, title: "Mentorship", desc: "One-on-one guidance for your digital journey" },
  { icon: Facebook, title: "Facebook Ads", desc: "Targeted ad campaigns that convert" },
  { icon: Megaphone, title: "Business Promotion", desc: "Amplify your brand across all channels" },
  { icon: PenTool, title: "Copywriting", desc: "Compelling copy that sells your vision" },
  { icon: FileText, title: "Content Creation", desc: "Engaging content tailored to your audience" },
  { icon: Sparkles, title: "AI Prompting & Vibe Coding", desc: "Leverage AI tools for modern workflows" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-heading text-sm tracking-[0.25em] uppercase mb-3">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            My <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
