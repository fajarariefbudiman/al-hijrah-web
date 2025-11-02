import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import logo from "../assets/al-hijrah-logo-rm.png";
import hero from "../assets/more.jpg";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register:", form);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-gray-800">
      {/* === Left Image Side === */}
      <div className="hidden md:flex w-1/2 relative overflow-hidden">
        <img
          src={hero}
          alt="Al-Hijrah Bus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Amber Transparan */}
        <div className="absolute inset-0 bg-amber-500/20 z-[1]" />

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

      {/* === Right Form Side === */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          {/* === Desktop Form === */}
          <div className="hidden md:block">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-amber-600 mb-4 leading-tight">Daftar</h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Bergabung dengan <span className="text-amber-600 font-medium">Al-Hijrah Bus</span> dan nikmati perjalanan nyaman tanpa ribet.
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-gray-700 text-base"
                >
                  Nama Lengkap
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nama lengkap Anda"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-base py-3 rounded-xl shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-gray-700 text-base"
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
                  className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-base py-3 rounded-xl shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-gray-700 text-base"
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
                  className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-base py-3 rounded-xl shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-gray-700 text-base"
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
                  className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-base py-3 rounded-xl shadow-sm"
                />
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl text-base shadow-lg transition-all"
              >
                Daftar Sekarang
              </Button>

              {/* === Social Login === */}
              <div className="flex gap-3 mt-4">
                <Button
                  type="button"
                  className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3"
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
                  className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook"
                    className="h-5 w-5 mr-2"
                  />
                  Facebook
                </Button>
              </div>
            </div>

            <p className="text-sm text-center text-gray-600 mt-6">
              Sudah punya akun?{" "}
              <a
                href="/login"
                className="text-amber-600 font-semibold hover:underline"
              >
                Masuk sekarang
              </a>
            </p>

            <p className="text-xs text-center text-gray-400 mt-8">© 2025 Al-Hijrah Transport. All Rights Reserved.</p>
          </div>

          {/* === Mobile Version === */}
          <div className="block md:hidden w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
              {/* Header Mobile */}
              <div className="text-center mb-6">
                <a
                  href="/"
                  className="text-amber-600 font-semibold hover:underline"
                >
                  <div className="flex justify-center items-center border-b border-amber-400 p-3 mb-3">
                    <img
                      src={logo}
                      alt="Al-Hijrah Logo"
                      className="h-auto w-3/4 drop-shadow-[0_0_12px_rgba(249, 216, 134, 0.43)]"
                    />
                  </div>
                </a>
                <h1 className="text-2xl font-extrabold text-amber-600 mb-2">Daftar</h1>
              </div>

              {/* Form Mobile */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name-mobile"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Nama Lengkap
                  </Label>
                  <Input
                    id="name-mobile"
                    name="name"
                    type="text"
                    placeholder="Nama lengkap Anda"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-sm h-11 rounded-lg"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="email-mobile"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Email
                  </Label>
                  <Input
                    id="email-mobile"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-sm h-11 rounded-lg"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="password-mobile"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Password
                  </Label>
                  <Input
                    id="password-mobile"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-sm h-11 rounded-lg"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="confirmPassword-mobile"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Konfirmasi Password
                  </Label>
                  <Input
                    id="confirmPassword-mobile"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="bg-white border border-amber-200 text-gray-800 placeholder-gray-400 focus:border-amber-400 text-sm h-11 rounded-lg"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold h-11 rounded-lg text-sm shadow-md transition-all mt-6"
                >
                  Daftar Sekarang
                </Button>
              </div>

              {/* Divider */}
              <div className="flex items-center my-5">
                <div className="flex-grow border-t border-gray-300" />
                <span className="mx-3 text-xs text-gray-500">atau daftar dengan</span>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              {/* Social Buttons */}
              <div className="flex gap-2">
                <Button
                  type="button"
                  className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 h-10 text-xs"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google"
                    className="h-4 w-4 mr-1.5"
                  />
                  Google
                </Button>
                <Button
                  type="button"
                  className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 h-10 text-xs"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook"
                    className="h-4 w-4 mr-1.5"
                  />
                  Facebook
                </Button>
              </div>

              <p className="text-xs text-center text-gray-600 mt-5">
                Sudah punya akun?{" "}
                <a
                  href="/login"
                  className="text-amber-600 font-semibold hover:underline"
                >
                  Masuk sekarang
                </a>
              </p>
            </div>

            <p className="text-xs text-center text-gray-400 mt-4">© 2025 Al-Hijrah Transport</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
