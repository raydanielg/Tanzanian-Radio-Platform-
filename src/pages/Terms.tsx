import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg text-white/80">Welcome to Bongo Radio Hub! These terms of service govern your use of the website. By accessing or using the platform, you agree to comply with these terms. Please read them carefully before proceeding.</p>
          
          <h3 className="text-2xl font-semibold text-primary">1. Acceptance of Terms</h3>
          <p className="text-lg text-white/80">By accessing Bongo Radio Hub, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you are prohibited from using this website.</p>
          
          <h3 className="text-2xl font-semibold text-primary">2. Service Description</h3>
          <p className="text-lg text-white/80">Bongo Radio Hub is a free online radio streaming platform developed as part of a Computer Science project at Arusha Technical College. This service allows users to access publicly available radio streams for educational and entertainment purposes.</p>
          
          <h3 className="text-2xl font-semibold text-primary">3. User Conduct</h3>
          <p className="text-lg text-white/80">When using Bongo Radio Hub, you agree to:</p>
          <ul className="list-disc pl-6 text-white/80">
            <li>Use the platform solely for lawful purposes.</li>
            <li>Refrain from any actions that may disrupt or harm the functionality of the website.</li>
            <li>Respect the intellectual property rights of third parties, including radio stations and their logos.</li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-primary">4. Intellectual Property</h3>
          <p className="text-lg text-white/80">All radio stations and logos accessed through this platform are the property of their respective owners. Bongo Radio Hub does not claim ownership of or responsibility for any third-party content. Unauthorized use of copyrighted materials is strictly prohibited.</p>
          
          <h3 className="text-2xl font-semibold text-primary">5. Limitation of Liability</h3>
          <p className="text-lg text-white/80">Bongo Radio Hub is provided "as is" without any guarantees or warranties. The developer is not responsible for:</p>
          <ul className="list-disc pl-6 text-white/80">
            <li>Interruptions or unavailability of radio streams.</li>
            <li>Errors, bugs, or inaccuracies in the platform.</li>
            <li>Any damages resulting from your use of the service.</li>
          </ul>
          
          <h3 className="text-2xl font-semibold text-primary">6. Privacy Policy</h3>
          <p className="text-lg text-white/80">Your use of Bongo Radio Hub is also governed by the Privacy Policy. By using the platform, you consent to the data practices described in the Privacy Policy.</p>
          
          <h3 className="text-2xl font-semibold text-primary">7. Termination</h3>
          <p className="text-lg text-white/80">The developer reserves the right to suspend or terminate your access to Bongo Radio Hub at any time, without prior notice, if you violate these terms or engage in any harmful activities.</p>
          
          <h3 className="text-2xl font-semibold text-primary">8. Changes to the Terms</h3>
          <p className="text-lg text-white/80">These terms may be updated periodically to reflect changes in the platform or legal requirements. Users are encouraged to review the terms regularly. Continued use of the service constitutes acceptance of any updated terms.</p>
          
          <h3 className="text-2xl font-semibold text-primary">9. Governing Law</h3>
          <p className="text-lg text-white/80">These terms are governed by the laws of Tanzania. Any disputes arising from or relating to the use of Bongo Radio Hub will be subject to the jurisdiction of the courts in Tanzania.</p>
          
          <h3 className="text-2xl font-semibold text-primary">10. Contact Information</h3>
          <p className="text-lg text-white/80">For questions, feedback, or concerns about these terms, please contact the developer via GitHub or other available channels provided on the website.</p>
          
          <p className="text-lg text-white/80">Thank you for using Bongo Radio Hub!</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;