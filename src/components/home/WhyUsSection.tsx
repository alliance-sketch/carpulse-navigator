import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, HeadphonesIcon, Award, DollarSign } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast", desc: "10-second update intervals with 99.9% server uptime." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Dedicated support team available round the clock via phone, chat, and email." },
  { icon: Award, title: "Industry Certified", desc: "AIS-140 compliant devices approved by government standards." },
  { icon: DollarSign, title: "Best Value", desc: "Competitive pricing with no hidden charges. Plans starting at $9.99/month." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Why CarPulseGPS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Thousands <span className="gradient-text">Trust Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover-lift"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
