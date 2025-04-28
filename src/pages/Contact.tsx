import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-primary">Contact</h1>
        <div className="prose prose-invert max-w-none space-y-8">
          <h2 className="text-2xl font-semibold text-white/90">Maximillian Urio</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-lg">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:+255762814092" className="text-primary hover:underline">
                +255 762 814 092
              </a>
              <span className="text-white/60">(Phone/WhatsApp/Telegram)</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:URIOMAXMILLIAN@GMAIL.COM" className="text-primary hover:underline">
                airiermonster@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Send className="w-6 h-6 text-primary" />
              <a href="https://t.me/airiermonster" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                @airiermonster
              </a>
              <span className="text-white/60">(Telegram)</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;