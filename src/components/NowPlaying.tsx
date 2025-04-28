import { RadioStation } from "@/types/radio";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, Music2Icon, XIcon } from "lucide-react";
import { useState } from "react";

interface NowPlayingProps {
  station: RadioStation | null;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export const NowPlaying = ({
  station,
  isPlaying,
  onPlayPause,
}: NowPlayingProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!station || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-white/10 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        {station.favicon ? (
          <img
            src={station.favicon}
            alt={station.name}
            className="w-16 h-16 rounded-lg object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        ) : (
          <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
            <Music2Icon className="w-8 h-8 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-xl text-white">{station.name}</h3>
          <p className="text-sm text-muted">
            {station.tags.split(",")[0]} • {station.bitrate}kbps
          </p>
        </div>
        <button
          onClick={onPlayPause}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            "bg-primary hover:bg-primary/80 transition-colors",
            "active:scale-95"
          )}
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6 text-white" />
          ) : (
            <PlayIcon className="w-6 h-6 text-white animate-bounce" />
          )}
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <XIcon className="w-4 h-4 text-white/60" />
        </button>
      </div>
    </div>
  );
};