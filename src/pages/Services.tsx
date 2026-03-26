import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, Bike, Truck, Bus, Baby, Dog, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Car, title: "Car GPS Tracking", price: "₹3,999",
    desc: "Comprehensive tracking solution for personal cars with real-time monitoring.",
    features: ["Real-time tracking", "Engine cut-off", "Geofencing alerts", "Trip history", "Mobile app access", "SOS button"],
  },
  {
    icon: Bike, title: "Bike GPS Tracking", price: "₹2,499",
    desc: "Compact and weatherproof GPS device designed specifically for two-wheelers.",
    features: ["Compact design", "Theft alerts", "Live location", "Speed alerts", "Battery backup", "Anti-tamper alarm"],
  },
  {
    icon: Truck, title: "Fleet Management", price: "Custom",
    desc: "Enterprise-grade fleet tracking with route optimization and driver management.",
    features: ["Multi-vehicle dashboard", "Route optimization", "Fuel monitoring", "Driver behavior", "Maintenance alerts", "Custom reports"],
  },
  {
    icon: Bus, title: "School Bus Tracking", price: "₹4,999",
    desc: "Keep children safe with real-time school bus tracking and parent notifications.",
    features: ["Parent app alerts", "Stop notifications", "Attendance tracking", "Route deviation alerts", "Speed monitoring", "Emergency SOS"],
  },
  {
    icon: Baby, title: "Child Safety Tracker", price: "₹1,999",
    desc: "Wearable GPS tracker for children with panic button and safe-zone alerts.",
    features: ["SOS panic button", "Safe zone alerts", "Two-way calling", "Location history", "Waterproof design", "Long battery life"],
  },
  {
    icon: Dog, title: "Pet GPS Tracker", price: "₹1,499",
    desc: "Lightweight GPS collar attachment for dogs and cats with activity monitoring.",
    features: ["Lightweight design", "Activity tracking", "Escape alerts", "Virtual fence", "Health monitoring", "Waterproof"],
  },
];

const Services = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="hero-gradient pt-32 pb-20">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            GPS Solutions for <span className="text-secondary">Every Need</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70">
            From personal vehicles to enterprise fleets, we deliver reliable tracking solutions with industry-leading features.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border hover-lift overflow-hidden"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-4 font-display text-2xl font-bold gradient-text">{s.price}</p>
                <ul className="mt-6 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
