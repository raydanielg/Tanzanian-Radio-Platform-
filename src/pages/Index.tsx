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
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white relative overflow-hidden flex flex-col">
      {/* African-themed animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* African pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJhZGlua28iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMzBWMHYzMEg2MFY2MEgzMHYzMEgwdjMwWiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYWRpbmtvKSIvPjwvc3ZnPg==')"
        }}></div>
        
        {/* Animated elements with African colors */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E25822]/10 rounded-full animate-float blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full animate-float blur-3xl" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#008751]/10 rounded-full animate-float blur-3xl" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-[#654321]/10 rounded-full animate-float blur-3xl" style={{ animationDelay: "3.5s" }} />
      </div>
      
      <Navbar />
      
      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Header with African-inspired design */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] via-[#E25822] to-[#008751] bg-clip-text text-transparent">
              Tanzanian Radio Stations
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Listen to the best radio stations from across Tanzania. Experience the rich culture and vibrant music.
            </p>
          </div>
          
          {/* Station list with improved card design */}
          <div className="max-w-6xl mx-auto">
            <StationList
              stations={stations || []}
              onStationClick={playStation}
              currentStation={currentStation}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Enhanced Now Playing bar */}
      <NowPlaying
        station={currentStation}
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
        className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] border-t border-gray-700"
      />
    </div>
  );
};

export default Index;