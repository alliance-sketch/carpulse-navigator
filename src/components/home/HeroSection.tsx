import { motion } from "framer-motion";
import { ArrowRight, Shield, Smartphone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(163 100% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(163 100% 39% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
    </div>

    <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Trusted by 50,000+ Vehicles Across India
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Track Your Vehicle.{" "}
            <span className="text-secondary">Anytime.</span>{" "}
            <span className="text-accent">Anywhere.</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
            Advanced GPS tracking with real-time monitoring, geofencing, engine control, and smart alerts — all from your phone.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base px-8 glow-green">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                Explore Services
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-secondary" /> Free Mobile App</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> Pan-India Coverage</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Dashboard mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-secondary/20 bg-primary/60 backdrop-blur-sm p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-secondary/60" />
            </div>
            {/* Map simulation */}
            <div className="rounded-xl bg-primary/40 h-64 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "linear-gradient(hsl(163 100% 39% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(163 100% 39% / 0.5) 1px, transparent 1px)",
                backgroundSize: "30px 30px"
              }} />
              {/* Vehicle markers */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/3 left-1/4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-secondary-foreground" />
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute top-1/2 right-1/3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-accent-foreground" />
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.8, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 left-1/2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-secondary-foreground" />
                </div>
              </motion.div>
            </div>
            {/* Stats bar */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Active", value: "1,247", color: "text-secondary" },
                { label: "Idle", value: "89", color: "text-accent" },
                { label: "Offline", value: "23", color: "text-muted-foreground" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-primary/40 p-3 text-center">
                  <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-primary-foreground/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -left-8 glass-card p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Geofence Alert</p>
              <p className="text-xs text-muted-foreground">Vehicle left safe zone</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
