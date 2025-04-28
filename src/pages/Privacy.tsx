import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-lg text-white/80">
            Welcome to my online radio streaming platform! (Bongo Radio Hub) This website is developed just for fun as part of My Computer Science learning curve at Arusha Technical College(ATC). By using this platform, you agree to the terms outlined in this privacy policy. I am committed to providing a free and accessible service while respecting the rights of radio station owners.
          </p>

          <h3 className="text-2xl font-semibold text-primary">Community Engagement</h3>
          <p className="text-lg text-white/80">
            I value and encourage community contributions and suggestions to improve this platform. Your feedback is essential to enhance the user experience and the overall functionality of this service.
          </p>

          <h3 className="text-2xl font-semibold text-primary">Ownership and Rights</h3>
          <p className="text-lg text-white/80">
            Please note that this platform does not claim ownership of any radio stations or their respective logos streamed through the service. All rights to the radio content and logos belong to their rightful owners. This platform solely provides a means to access publicly available radio streams.
          </p>

          <h3 className="text-2xl font-semibold text-primary">Purpose and Disclaimer</h3>
          <p className="text-lg text-white/80">
            This platform is just my fun student project created as part of a Computer Science curriculum (Web design) at Arusha Technical College. It is intended solely for educational purposes and not for commercial use.
          </p>

          <h3 className="text-2xl font-semibold text-primary">Your Privacy</h3>
          <p className="text-lg text-white/80">
            I do not collect or store personal user data beyond what is necessary to provide the streaming service. Any data accessed or used during your interaction with the platform is handled in accordance with best practices for user privacy.
          </p>

          <h3 className="text-2xl font-semibold text-primary">Liability</h3>
          <p className="text-lg text-white/80">
            While I strive to ensure that the platform operates smoothly, I cannot guarantee uninterrupted access to all radio streams. The availability and quality of the streams depend on external sources managed by the respective radio stations and API Provider.
          </p>

          <h3 className="text-2xl font-semibold text-primary">Contributions and Suggestions</h3>
          <p className="text-lg text-white/80">
            Your input is highly appreciated! If you have suggestions for improvement or wish to contribute to the platform, please feel free to reach out or check my GitHub page for source codes of this website. Together, we can make this service even better.
          </p>

          <p className="text-lg text-white/80 mt-8">Thank you for using Bongo Radio Hub streaming service!</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;