import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Award, Users, Building, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 animate-fade-in">
            About Luxe Stay
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up max-w-2xl">
            Delivering exceptional hospitality experiences since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in 2010, Luxe Stay has been at the forefront of modern hotel management,
              providing world-class accommodations and services to travelers worldwide.
            </p>
            <p>
              Our mission is to create memorable experiences through exceptional service,
              elegant accommodations, and cutting-edge technology that makes booking and
              staying with us seamless and enjoyable.
            </p>
            <p>
              With over 50 properties across major cities, we continue to set new standards
              in hospitality, combining traditional warmth with modern convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-hover transition-smooth">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Properties</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-hover transition-smooth">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">1M+</div>
              <p className="text-muted-foreground">Happy Guests</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-hover transition-smooth">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">25+</div>
              <p className="text-muted-foreground">Awards Won</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-hover transition-smooth">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
              <p className="text-muted-foreground">Average Rating</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Guest-Centric</h3>
            <p className="text-muted-foreground">
              Every decision we make is centered around enhancing our guests' experience
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Excellence</h3>
            <p className="text-muted-foreground">
              We strive for excellence in every aspect of our service and operations
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Community</h3>
            <p className="text-muted-foreground">
              Building lasting relationships with our guests, team, and local communities
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
