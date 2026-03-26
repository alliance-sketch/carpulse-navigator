import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import loginBg from "@/assets/login-bg.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.info("Login functionality requires backend integration.");
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="w-full max-w-md bg-card/95 backdrop-blur-sm rounded-xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <hr className="border-border mb-6" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Email/Username/Phone"
            required
            className="h-12 bg-muted/50 border-border"
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className="h-12 bg-muted/50 border-border"
          />

          <div className="flex items-center gap-2">
            <Checkbox id="remember" defaultChecked />
            <label htmlFor="remember" className="text-sm text-foreground cursor-pointer">
              Remember me
            </label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-semibold"
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>

          <Button
            type="button"
            variant="secondary"
            className="w-full h-12 bg-muted text-muted-foreground hover:bg-muted/80 text-base"
            onClick={() => toast.info("Password reset requires backend integration.")}
          >
            Forgot password?
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
