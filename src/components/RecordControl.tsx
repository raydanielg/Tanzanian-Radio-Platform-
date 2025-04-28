import { useState, useRef, useEffect } from 'react';
import RecordRTC from 'recordrtc';
import { Button } from './ui/button';
import { MicIcon, StopCircleIcon, DownloadIcon } from 'lucide-react';
import { toast } from 'sonner';

export const RecordControl = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const recorderRef = useRef<RecordRTC | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Check for microphone permission when component mounts
    checkMicrophonePermission();
    
    // Cleanup function to stop all tracks when component unmounts
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const checkMicrophonePermission = async () => {
    try {
      const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
      setHasPermission(result.state === 'granted');
      
      result.addEventListener('change', () => {
        setHasPermission(result.state === 'granted');
      });
    } catch (error) {
      console.log('Permission check error:', error);
      setHasPermission(false);
    }
  };

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setHasPermission(true);
      return stream;
    } catch (error) {
      console.error('Permission request error:', error);
      setHasPermission(false);
      throw error;
    }
  };

  const startRecording = async () => {
    try {
      let stream;
      if (!hasPermission) {
        stream = await requestMicrophonePermission();
      } else {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
      
      streamRef.current = stream;
      recorderRef.current = new RecordRTC(stream, {
        type: 'audio',
        mimeType: 'audio/webm',
        recorderType: RecordRTC.StereoAudioRecorder,
        numberOfAudioChannels: 1,
        desiredSampRate: 16000,
      });
      
      recorderRef.current.startRecording();
      setIsRecording(true);
      toast.success('Recording started');
    } catch (error: any) {
      const errorMessage = error.name === 'NotAllowedError' 
        ? 'Microphone permission denied. Please allow microphone access to record.'
        : 'Failed to start recording. Please check your microphone connection.';
      
      toast.error(errorMessage);
      console.error('Recording error:', error);
    }
  };

  const stopRecording = () => {
    if (recorderRef.current && streamRef.current) {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current!.getBlob();
        const url = URL.createObjectURL(blob);
        setRecordedAudio(url);
        setIsRecording(false);
        
        // Stop all tracks in the stream
        streamRef.current!.getTracks().forEach(track => track.stop());
        streamRef.current = null;
        
        toast.success('Recording stopped');
      });
    }
  };

  const downloadRecording = () => {
    if (recordedAudio) {
      const a = document.createElement('a');
      a.href = recordedAudio;
      a.download = 'radio-recording.webm';
      a.click();
    }
  };

  return (
    <div className="flex items-center gap-2">
      {!isRecording ? (
        <Button
          variant="outline"
          size="icon"
          onClick={startRecording}
          className="bg-red-500/10 hover:bg-red-500/20"
        >
          <MicIcon className="h-4 w-4 text-red-500" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={stopRecording}
          className="bg-red-500/10 hover:bg-red-500/20 animate-pulse"
        >
          <StopCircleIcon className="h-4 w-4 text-red-500" />
        </Button>
      )}
      {recordedAudio && (
        <Button
          variant="outline"
          size="icon"
          onClick={downloadRecording}
          className="bg-primary/10 hover:bg-primary/20"
        >
          <DownloadIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};