import { MapPin } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
      <MapPin className="w-5 h-5 text-secondary-foreground" />
      <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full animate-pulse-glow" />
    </div>
    <span className="font-display font-bold text-xl tracking-tight">
      Car<span className="text-secondary">Pulse</span>GPS
    </span>
  </div>
);

export default Logo;
