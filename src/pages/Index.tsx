import { useRadioStations } from "@/hooks/use-radio-stations";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { StationList } from "@/components/StationList";
import { NowPlaying } from "@/components/NowPlaying";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { data: stations, isLoading } = useRadioStations();
  const { isPlaying, currentStation, playStation, togglePlay } = useAudioPlayer();

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white relative overflow-hidden flex flex-col">
      {/* ntaweka hapa African-themed animated background symbols baadae saiv nimechoka sana man */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full animate-float blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full animate-float blur-3xl" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full animate-float blur-3xl" style={{ animationDelay: "2s" }} />
      </div>
      
      <Navbar />
      
      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
          Tanzanian Free Local Radios online
          </h1>
          <StationList
            stations={stations || []}
            onStationClick={playStation}
            currentStation={currentStation}
            isLoading={isLoading}
          />
        </div>
      </main>

      <Footer />
      
      <NowPlaying
        station={currentStation}
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
      />
    </div>
  );
};

export default Index;