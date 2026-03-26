import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo className="text-primary-foreground [&_span]:text-secondary" />
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            India's trusted GPS tracking solutions for vehicles, fleets, and personal safety.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            {["/", "/about", "/services", "/contact", "/dealer"].map((to) => (
              <Link key={to} to={to} className="block hover:text-secondary transition-colors">
                {to === "/" ? "Home" : to.slice(1).charAt(0).toUpperCase() + to.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            {["Car Tracking", "Bike Tracking", "Fleet Management", "School Bus Tracking", "Child Safety", "Pet Tracking"].map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
              <span>123 Tech Park, Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              <span>info@carpulsegps.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} CarPulseGPS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
