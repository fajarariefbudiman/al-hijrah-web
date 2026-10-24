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
        title: "Kesalahan",
        description: "Masukkan alamat email Anda",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Kesalahan",
        description: "Masukkan alamat email yang valid",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Simulasi",
      description: "Tidak ada email yang dikirim. Ini hanya contoh tampilan.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-md">
          <Link to="/login" className="inline-flex items-center gap-2 text-amber-600 hover:text-gray-900 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Masuk
          </Link>

          <Card className="p-8 shadow-md">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-amber-600" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Lupa Kata Sandi?</h1>
                  <p className="text-muted-foreground">
                    No worries! email@example.com and we'll send you reset instructions.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email">Alamat Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Kirim Tautan Reset (Simulasi)
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Ini Hanya Simulasi</h2>
                <p className="text-muted-foreground mb-6">
                  Tidak ada email yang dikirim ke <strong>{email}</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Ingin mencoba lagi?{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-amber-600 hover:underline"
                  >
                    ulangi
                  </button>
                </p>
                <Link to="/login">
                  <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white">
                    Kembali ke Masuk
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
