import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const appFeatures = [
  "Real-time vehicle tracking on map",
  "Instant push notifications & alerts",
  "Remote engine cut-off control",
  "Trip history with playback",
  "Multi-vehicle dashboard",
  "Geofence management",
];

const AppShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding hero-gradient overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Mobile App</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
              Track Everything from Your <span className="text-secondary">Pocket</span>
            </h2>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              Download the CarPulseGPS app for iOS and Android. Monitor your vehicles, set alerts, and stay in control — wherever you are.
            </p>
            <ul className="mt-8 space-y-3">
              {appFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-primary-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6">
                Download for iOS
              </Button>
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-6">
                Download for Android
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Phone mockup */}
            <div className="relative w-72">
              <div className="rounded-[2.5rem] border-4 border-primary-foreground/10 bg-primary/60 backdrop-blur-sm p-4 shadow-2xl">
                <div className="rounded-[2rem] bg-primary/80 overflow-hidden">
                  <div className="h-6 flex items-center justify-center">
                    <div className="w-20 h-4 rounded-full bg-primary-foreground/5" />
                  </div>
                  {/* App screen */}
                  <div className="px-4 pb-6 space-y-4">
                    <div className="text-center">
                      <p className="text-xs text-primary-foreground/50">Welcome back</p>
                      <p className="text-sm font-semibold text-primary-foreground">My Vehicles</p>
                    </div>
                    {/* Map area */}
                    <div className="h-40 rounded-xl bg-secondary/10 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "linear-gradient(hsl(163 100% 39% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(163 100% 39% / 0.5) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                      }} />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-secondary-foreground" />
                      </motion.div>
                    </div>
                    {/* Vehicle cards */}
                    {[
                      { name: "Honda City", status: "Moving", speed: "45 km/h", color: "bg-secondary" },
                      { name: "Swift Dzire", status: "Parked", speed: "0 km/h", color: "bg-accent" },
                    ].map((v) => (
                      <div key={v.name} className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/5">
                        <div className={`w-2 h-2 rounded-full ${v.color}`} />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-primary-foreground">{v.name}</p>
                          <p className="text-[10px] text-primary-foreground/50">{v.status} · {v.speed}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
