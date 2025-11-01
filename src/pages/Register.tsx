import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import img from "../assets/more.jpg";
import logo from "../assets/al-hijrah-logo-rm.png";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", form);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row bg-black text-gray-200 overflow-hidden">
      {/* Left Side Image */}
      <div className="hidden md:flex w-1/2 relative overflow-hidden">
        <img
          src={img}
          alt="Al-Hijrah Bus"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Logo kiri atas */}
        <div className="absolute top-8 left-8 flex items-center gap-3 z-[2]">
          <div className="bg-white/10 backdrop-blur-md border border-amber-400/50 rounded-xl p-3 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            <img
              src={logo}
              alt="Al-Hijrah Logo"
              className="h-14 w-auto drop-shadow-[0_0_12px_rgba(249, 216, 134, 0.43)]"
            />
          </div>
        </div>
      </div>

      {/* Right Side Form (Scrollable) */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-12 lg:py-0 bg-[#0A0A0A]">
        <div className="max-w-lg w-full mx-auto">
          {/* Desktop Form */}
          <div className="hidden md:block pt-48 pb-5">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-amber-400 mb-5 leading-tight">Daftar</h1>
            <p className="text-gray-400 text-lg lg:text-xl mb-12 leading-relaxed">
              Yuk, bergabung dengan <span className="text-amber-400 font-medium">Al-Hijrah Bus</span> dan nikmati kemudahan perjalananmu.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="space-y-3">
                <Label
                  htmlFor="name"
                  className="text-gray-300 text-base lg:text-lg"
                >
                  Nama Lengkap
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nama lengkap Anda"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-lg py-4 rounded-xl"
                />
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-gray-300 text-base lg:text-lg"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-lg py-4 rounded-xl"
                />
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="password"
                  className="text-gray-300 text-base lg:text-lg"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-lg py-4 rounded-xl"
                />
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="confirmPassword"
                  className="text-gray-300 text-base lg:text-lg"
                >
                  Konfirmasi Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-lg py-4 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-xl text-lg shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all"
              >
                Daftar Sekarang
              </Button>

              {/* Social Login */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  type="button"
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google"
                    className="h-5 w-5 mr-2"
                  />
                  Google
                </Button>
                <Button
                  type="button"
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook"
                    className="h-5 w-5 mr-2"
                  />
                  Facebook
                </Button>
              </div>
            </form>

            <p className="text-base text-center text-gray-400 mt-10">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-amber-400 font-semibold hover:underline"
              >
                Masuk sekarang
              </Link>
            </p>

            <p className="text-sm text-center text-gray-500 mt-12 tracking-wide">© 2025 Al-Hijrah Transport. All Rights Reserved.</p>
          </div>

          {/* Mobile Version (Card Style) */}
          <div className="block md:hidden min-h-screen flex items-center justify-center bg-[#0A0A0A] px-6 py-10">
            <div className="w-full max-w-md bg-[#111111] rounded-3xl shadow-lg shadow-amber-500/10 border border-amber-400/20 p-8">
              <h1 className="text-4xl font-extrabold text-amber-400 text-center mb-3 tracking-tight">Daftar</h1>
              <p className="text-gray-400 text-center mb-8 text-base leading-relaxed">
                Buat akun dan mulai perjalanan bersama <span className="text-amber-400 font-semibold">Al-Hijrah Bus</span>
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-gray-300 text-sm"
                  >
                    Nama Lengkap
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nama lengkap Anda"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-base py-3 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-gray-300 text-sm"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-base py-3 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-gray-300 text-sm"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-base py-3 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-gray-300 text-sm"
                  >
                    Konfirmasi Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/40 text-white placeholder-gray-500 focus:border-amber-400 text-base py-3 rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-xl text-base shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all"
                >
                  Daftar Sekarang
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-700" />
                <span className="mx-3 text-xs text-gray-400">atau daftar dengan</span>
                <div className="flex-grow border-t border-gray-700" />
              </div>

              {/* Social Buttons */}
              <div className="flex gap-3">
                <Button
                  type="button"
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google"
                    className="h-5 w-5 mr-2"
                  />
                  Google
                </Button>
                <Button
                  type="button"
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook"
                    className="h-5 w-5 mr-2"
                  />
                  Facebook
                </Button>
              </div>

              <p className="text-sm text-center text-gray-400 mt-8">
                Sudah punya akun?{" "}
                <Link
                  to="/login"
                  className="text-amber-400 font-semibold hover:underline"
                >
                  Masuk sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
