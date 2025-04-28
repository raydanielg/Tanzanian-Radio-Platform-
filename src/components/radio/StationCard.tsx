import { RadioStation } from "@/types/radio";
import { cn } from "@/lib/utils";
import { Music2Icon, Radio, Headphones, Globe2, Signal, PinIcon, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StationCardProps {
  station: RadioStation;
  isPinned: boolean;
  isCurrentStation: boolean;
  onPinToggle: (stationId: string) => void;
  onStationClick: (station: RadioStation) => void;
}

export const StationCard = ({
  station,
  isPinned,
  isCurrentStation,
  onPinToggle,
  onStationClick,
}: StationCardProps) => {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        "hover:shadow-lg hover:shadow-primary/20",
        "group backdrop-blur-sm bg-card/80 relative overflow-hidden",
        isCurrentStation && "ring-2 ring-primary",
        isPinned && "border-primary"
      )}
    >
      <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Radio className="w-16 h-16 text-primary animate-float" />
      </div>
      <div className="absolute -left-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Headphones className="w-16 h-16 text-accent animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            {station.favicon ? (
              <img
                src={station.favicon}
                alt={station.name}
                className="w-16 h-16 rounded-md object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            ) : (
              <div className="w-16 h-16 rounded-md bg-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Radio className="w-8 h-8 text-primary" />
              </div>
            )}
            {isCurrentStation && (
              <div className="absolute -top-1 -right-1 w-4 h-4">
                <div className="absolute w-full h-full bg-primary rounded-full animate-ping" />
                <div className="absolute w-full h-full bg-primary rounded-full" />
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-2 -right-2 h-6 w-6"
              onClick={(e) => {
                e.stopPropagation();
                onPinToggle(station.stationuuid);
              }}
            >
              <PinIcon
                className={cn(
                  "h-4 w-4",
                  isPinned ? "text-primary fill-primary" : "text-muted"
                )}
              />
            </Button>
          </div>
          <div 
            className="flex flex-col items-start flex-1"
            onClick={() => onStationClick(station)}
          >
            <h3 className="font-semibold text-lg text-white line-clamp-1 transition-colors duration-300 group-hover:text-primary">
              {station.name}
            </h3>
            <div className="space-y-1 w-full">
              <p className="text-sm text-muted flex items-center gap-1">
                <Signal className="w-3 h-3" /> {station.bitrate}kbps
              </p>
              {station.language && (
                <p className="text-sm text-muted flex items-center gap-1">
                  <Globe2 className="w-3 h-3" /> {station.language}
                </p>
              )}
              <p className="text-sm text-muted flex items-center gap-1">
                <Users className="w-3 h-3" /> {station.clickcount || 0} listeners
              </p>
              <p className="text-sm text-muted line-clamp-1">
                {station.tags.split(",").slice(0, 3).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};