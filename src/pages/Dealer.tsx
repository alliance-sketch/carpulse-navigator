import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, TrendingUp, Users, Headphones } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  { icon: TrendingUp, title: "High Margins", desc: "Earn attractive margins on every device sold and subscription renewed." },
  { icon: Users, title: "Marketing Support", desc: "Get co-branded marketing materials, leads, and regional support." },
  { icon: Headphones, title: "Training & Support", desc: "Complete product training and dedicated dealer support team." },
  { icon: Handshake, title: "Exclusive Territory", desc: "Get exclusive dealer rights for your region with no competition." },
];

const Dealer = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Application submitted! Our dealer team will contact you within 48 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Dealer Program</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Become a <span className="text-secondary">CarPulseGPS Dealer</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Join America's fastest-growing GPS tracking network. Earn attractive margins and build a profitable business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold text-foreground">Apply to Become a <span className="gradient-text">Dealer</span></h2>
              <p className="mt-3 text-muted-foreground">Fill out the form below and our dealer team will get in touch.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-card border border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" required className="bg-muted/50" />
                <Input type="email" placeholder="Email" required className="bg-muted/50" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="tel" placeholder="Phone Number" required className="bg-muted/50" />
                <Input placeholder="City / District" required className="bg-muted/50" />
              </div>
              <Input placeholder="Current Business (if any)" className="bg-muted/50" />
              <Textarea placeholder="Tell us about your interest in the dealer program..." rows={4} className="bg-muted/50" />
              <Button type="submit" disabled={loading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dealer;
