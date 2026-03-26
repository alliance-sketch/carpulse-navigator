import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radio, MapPin, Power, Clock, Smartphone, Fuel } from "lucide-react";

const features = [
  { icon: Radio, title: "Real-Time Tracking", desc: "Live location updates every 10 seconds with precise GPS accuracy." },
  { icon: MapPin, title: "Geofencing", desc: "Set virtual boundaries and get instant alerts when vehicles enter or leave zones." },
  { icon: Power, title: "Engine Cut-Off", desc: "Remotely disable the engine in case of theft or unauthorized use." },
  { icon: Clock, title: "Trip History", desc: "Detailed playback of all routes with stops, speed, and distance data." },
  { icon: Smartphone, title: "Mobile App", desc: "Track all your vehicles from our intuitive iOS and Android app." },
  { icon: Fuel, title: "Fuel Monitoring", desc: "Monitor fuel levels and detect fuel theft with real-time sensors." },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Powerful Features for <span className="gradient-text">Complete Control</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
