import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Bike, Truck, Bus, Baby, Dog } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Car, title: "Car Tracking", desc: "Real-time car tracking with engine cut-off, geofencing, and trip history.", color: "bg-secondary/10 text-secondary" },
  { icon: Bike, title: "Bike Tracking", desc: "Compact GPS devices for two-wheelers with theft alerts and live location.", color: "bg-accent/10 text-accent" },
  { icon: Truck, title: "Fleet Management", desc: "Complete fleet visibility with route optimization, fuel monitoring, and driver behavior.", color: "bg-secondary/10 text-secondary" },
  { icon: Bus, title: "School Bus Tracking", desc: "Keep children safe with live bus tracking, stop alerts, and parent notifications.", color: "bg-accent/10 text-accent" },
  { icon: Baby, title: "Child Safety", desc: "Wearable GPS trackers for children with SOS button and safe-zone alerts.", color: "bg-secondary/10 text-secondary" },
  { icon: Dog, title: "Pet Tracking", desc: "Lightweight GPS collars for pets with activity monitoring and escape alerts.", color: "bg-accent/10 text-accent" },
];

const ServicesSection = () => {
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
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Tracking Solutions for <span className="gradient-text">Every Need</span>
          </h2>
          <p className="mt-4 text-muted-foreground">From personal vehicles to enterprise fleets, we have the right GPS solution for you.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to="/services" className="block p-6 rounded-2xl bg-card border border-border hover-lift group cursor-pointer h-full">
                <div className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
