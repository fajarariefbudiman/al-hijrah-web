import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Success",
      description: "Password reset link sent to your email",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-md">
          <Link to="/login" className="inline-flex items-center gap-2 text-sky-blue hover:text-navy-blue mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>

          <Card className="p-8 shadow-soft">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-blue/10 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-sky-blue" />
                  </div>
                  <h1 className="text-3xl font-bold text-navy-blue mb-2">Forgot Password?</h1>
                  <p className="text-muted-foreground">
                    No worries! Enter your email and we'll send you reset instructions.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white">
                    Send Reset Link
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy-blue mb-2">Check Your Email</h2>
                <p className="text-muted-foreground mb-6">
                  We've sent password reset instructions to <strong>{email}</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sky-blue hover:underline"
                  >
                    try again
                  </button>
                </p>
                <Link to="/login">
                  <Button variant="outline" className="border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white">
                    Back to Login
                  </Button>
                </Link>
              </div>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
