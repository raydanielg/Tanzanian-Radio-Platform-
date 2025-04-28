import { useQuery } from "@tanstack/react-query";
import { RadioStation } from "@/types/radio";

const fetchRadioStations = async (): Promise<RadioStation[]> => {
  try {
    const response = await fetch(
      "https://de1.api.radio-browser.info/json/stations/bycountry/Tanzania",
      {
        headers: {
          "Content-Type": "application/json",
          // Add User-Agent to prevent potential blocking
          "User-Agent": "TanzanianRadioPlayer/1.0",
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch radio stations: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching radio stations:", error);
    throw error;
  }
};

export const useRadioStations = () => {
  return useQuery({
    queryKey: ["radio-stations"],
    queryFn: fetchRadioStations,
    retry: 3, // Retry failed requests 3 times
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
};