import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Globe } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">About CarPulseGPS</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Driving Safety with <span className="gradient-text">Smart Technology</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              CarPulseGPS is America's leading GPS tracking solutions provider, empowering vehicle owners, fleet managers, and families with real-time tracking, intelligent alerts, and comprehensive analytics.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission is to make every journey safer, every fleet more efficient, and every parent more at ease — using cutting-edge IoT technology and a commitment to reliability.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {[
              { icon: Target, title: "Our Mission", desc: "To provide affordable, reliable GPS tracking solutions that protect lives and assets across the United States." },
              { icon: Users, title: "Our Team", desc: "12+ engineers, support agents, and IoT specialists dedicated to your safety." },
              { icon: Globe, title: "Nationwide Reach", desc: "Active in 15+ states with 40+ authorized dealers and growing." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
