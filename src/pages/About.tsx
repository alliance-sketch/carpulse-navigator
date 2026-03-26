import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Globe, Award, Shield, Heart } from "lucide-react";

const values = [
  { icon: Shield, title: "Safety First", desc: "Every product we build prioritizes the safety of people and assets." },
  { icon: Heart, title: "Customer Obsession", desc: "We go above and beyond to ensure every customer feels valued and supported." },
  { icon: Award, title: "Quality", desc: "AIS-140 certified devices built to withstand Indian road conditions." },
  { icon: Target, title: "Innovation", desc: "Constantly pushing boundaries with AI-powered analytics and IoT integration." },
  { icon: Users, title: "Community", desc: "Building India's largest network of GPS dealers and service partners." },
  { icon: Globe, title: "Accessibility", desc: "Making GPS tracking affordable and accessible to every Indian vehicle owner." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="hero-gradient pt-32 pb-20">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Driving India's <span className="text-secondary">GPS Revolution</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Founded in 2018, CarPulseGPS has grown from a small startup to India's most trusted GPS tracking brand, serving over 50,000 vehicles across 28 states.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>CarPulseGPS was born from a simple but powerful idea: every vehicle owner in India deserves affordable, reliable GPS tracking technology.</p>
              <p>What started as a two-person team in a Bangalore garage has grown into a nationwide operation with 50+ employees, 500+ dealers, and technology that protects over 50,000 vehicles daily.</p>
              <p>We've built our reputation on three pillars: cutting-edge technology, unmatched customer service, and partnerships that empower local entrepreneurs through our dealer network.</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              To make every journey on Indian roads safer through smart, connected GPS technology — empowering individuals, families, and businesses to track, protect, and optimize their vehicles.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "50,000+", label: "Vehicles Protected" },
                { value: "500+", label: "Active Dealers" },
                { value: "28+", label: "States Covered" },
                { value: "99.9%", label: "Uptime" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-muted/50 text-center">
                  <p className="font-display text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our <span className="gradient-text">Values</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
