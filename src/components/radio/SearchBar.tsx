import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MicIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { RecordControl } from "../RecordControl";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  listening: boolean;
  startListening: () => void;
  stopListening: () => void;
}

export const SearchBar = ({
  searchQuery,
  onSearchChange,
  listening,
  startListening,
  stopListening,
}: SearchBarProps) => {
  return (
    <div className="max-w-md mx-auto flex items-center gap-4">
      <Input
        type="search"
        placeholder="Search for radios here"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="bg-white/10 border-primary/20 text-white placeholder:text-white/60 focus:border-primary rounded-full px-6 py-3 text-lg transition-all duration-300 focus:ring-2 focus:ring-primary/30 hover:bg-white/15"
      />
      <Button
        variant="outline"
        size="icon"
        onClick={listening ? stopListening : startListening}
        className={cn(
          "bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300",
          listening && "animate-pulse"
        )}
      >
        <MicIcon className="h-4 w-4" />
      </Button>
      <RecordControl />
    </div>
  );
};