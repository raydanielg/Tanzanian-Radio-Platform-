import { useState, useEffect, useRef } from "react";
import { RadioStation } from "@/types/radio";
import { toast } from "sonner";

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playStation = async (station: RadioStation) => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = station.url_resolved;
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentStation(station);
        toast.success(`Now playing: ${station.name}`);
      }
    } catch (error) {
      toast.error("Failed to play station");
      console.error("Error playing station:", error);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else if (currentStation) {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return {
    isPlaying,
    currentStation,
    playStation,
    togglePlay,
  };
};