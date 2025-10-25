import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Form submission logic will be implemented later
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
            <Card className="p-6 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Luxury Avenue<br />
                      Hotel District, HD 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: +1 (234) 567-8900<br />
                      Reservations: +1 (234) 567-8901
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      General: info@luxestay.com<br />
                      Support: support@luxestay.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      24/7 Reception & Support<br />
                      Check-in: 3:00 PM<br />
                      Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 pb-16">
        <Card className="overflow-hidden shadow-soft">
          <div className="aspect-[21/9] bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder - Integration available on request</p>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
