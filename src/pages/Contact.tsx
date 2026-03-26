import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="hero-gradient pt-32 pb-20">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Have questions? Our team is ready to help you find the perfect GPS solution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" required className="bg-muted/50" />
                  <Input type="email" placeholder="Email Address" required className="bg-muted/50" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input type="tel" placeholder="Phone Number" required className="bg-muted/50" />
                  <Input placeholder="City" className="bg-muted/50" />
                </div>
                <Textarea placeholder="Tell us about your tracking needs..." rows={5} required className="bg-muted/50" />
                <Button type="submit" disabled={loading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Office Address", desc: "South Main Street, Clarkston, United States" },
                  { icon: Phone, title: "Phone", desc: "+1 269 360 5071" },
                  { icon: Mail, title: "Email", desc: "info@carpulsegps.com" },
                  { icon: Clock, title: "Business Hours", desc: "Mon-Sat: 9:00 AM - 7:00 PM IST" },
                ].map((c) => (
                  <div key={c.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-border h-64 bg-muted/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Clarkston, United States</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
