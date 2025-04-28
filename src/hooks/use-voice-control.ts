import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const useVoiceControl = (
  onPlay: (query: string) => void,
  onStop: () => void,
  onSearch: (query: string) => void
) => {
  const commands = [
    {
      command: 'play *',
      callback: (station: string) => {
        onPlay(station);
        toast.success(`Searching for station: ${station}`);
      },
    },
    {
      command: 'stop',
      callback: () => {
        onStop();
        toast.success('Stopping playback');
      },
    },
    {
      command: 'search *',
      callback: (query: string) => {
        onSearch(query);
        toast.success(`Searching for: ${query}`);
      },
    },
  ];

  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      toast.error('Browser does not support speech recognition.');
    }
  }, [browserSupportsSpeechRecognition]);

  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition,
  };
};