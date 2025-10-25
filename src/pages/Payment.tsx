import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { CheckCircle2, Download, Home } from "lucide-react";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const roomId = searchParams.get("room") || "1";
  const total = searchParams.get("total") || "0";
  const nights = searchParams.get("nights") || "0";
  
  const bookingId = "BK" + Date.now().toString().slice(-8);
  const bookingDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const roomsData = {
    "1": { name: "Deluxe King Room" },
    "2": { name: "Executive Suite" },
    "3": { name: "Single Comfort Room" },
    "4": { name: "Premium Double Room" },
    "5": { name: "Presidential Suite" },
    "6": { name: "Standard Twin Room" },
  };

  const room = roomsData[roomId as keyof typeof roomsData];

  const handleDownloadReceipt = () => {
    alert("Receipt download functionality will be implemented with backend integration");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-16 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 md:p-12 text-center shadow-hover">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-navy-blue mb-3">
              Payment Successful!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your booking has been confirmed. We've sent the confirmation details to your email.
            </p>

            {/* Booking Details */}
            <Card className="p-6 bg-gray-50 mb-8 text-left">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Booking ID</p>
                  <p className="font-semibold text-navy-blue">{bookingId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Booking Date</p>
                  <p className="font-semibold">{bookingDate}</p>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Room Type</p>
                <p className="font-semibold text-lg">{room.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Number of Nights</p>
                  <p className="font-semibold">{nights}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Amount Paid</p>
                  <p className="font-semibold text-xl text-sky-blue">${total}</p>
                </div>
              </div>
            </Card>

            {/* Important Information */}
            <div className="bg-sky-blue/10 border border-sky-blue/20 rounded-lg p-4 mb-8 text-left">
              <h3 className="font-semibold text-navy-blue mb-2">Important Information</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Check-in time: 2:00 PM</li>
                <li>• Check-out time: 12:00 PM</li>
                <li>• Please bring a valid ID for check-in</li>
                <li>• Free cancellation up to 24 hours before check-in</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadReceipt}
                variant="outline" 
                className="flex-1 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </Button>
              <Button 
                onClick={() => navigate("/")}
                className="flex-1 bg-sky-blue hover:bg-sky-blue/90 text-white"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;
