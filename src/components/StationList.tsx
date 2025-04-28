import { RadioStation } from "@/types/radio";
import { useState } from "react";
import { useVoiceControl } from "@/hooks/use-voice-control";
import { SearchBar } from "./radio/SearchBar";
import { StationCard } from "./radio/StationCard";
import { PaginationControls } from "./radio/PaginationControls";

interface StationListProps {
  stations: RadioStation[];
  onStationClick: (station: RadioStation) => void;
  currentStation: RadioStation | null;
  isLoading: boolean;
}

export const StationList = ({
  stations,
  onStationClick,
  currentStation,
  isLoading,
}: StationListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pinnedStations, setPinnedStations] = useState<string[]>(() => {
    const saved = localStorage.getItem("pinnedStations");
    return saved ? JSON.parse(saved) : [];
  });
  const itemsPerPage = 9;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const { startListening, stopListening, listening } = useVoiceControl(
    (station) => {
      const found = stations.find((s) => 
        s.name.toLowerCase().includes(station.toLowerCase())
      );
      if (found) onStationClick(found);
    },
    () => {
      // Handle stop command (BAADAE NTAWEKA HAPA)
    },
    handleSearch
  );

  const togglePin = (stationId: string) => {
    setPinnedStations((current) => {
      const updated = current.includes(stationId)
        ? current.filter((id) => id !== stationId)
        : [...current, stationId];
      localStorage.setItem("pinnedStations", JSON.stringify(updated));
      return updated;
    });
  };

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedStations = [...filteredStations].sort((a, b) => {
    const aIsPinned = pinnedStations.includes(a.stationuuid);
    const bIsPinned = pinnedStations.includes(b.stationuuid);
    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;
    return 0;
  });

  const totalPages = Math.ceil(sortedStations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStations = sortedStations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-32 bg-card animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        listening={listening}
        startListening={startListening}
        stopListening={stopListening}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {paginatedStations.map((station) => (
          <StationCard
            key={station.stationuuid}
            station={station}
            isPinned={pinnedStations.includes(station.stationuuid)}
            isCurrentStation={currentStation?.stationuuid === station.stationuuid}
            onPinToggle={togglePin}
            onStationClick={onStationClick}
          />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};