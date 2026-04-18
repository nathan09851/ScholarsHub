import { useEffect } from "react";

/**
 * ElevenLabs AI Voice Agent Widget (Official Widget Embed)
 */
const VoiceAgent = () => {
  useEffect(() => {
    // Add the ElevenLabs widget script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount if necessary
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* 
        Custom element for ElevenLabs Conversational AI 
        The widget itself manages its position (fixed to bottom right by default)
      */}
      <elevenlabs-convai agent-id="5e0227a1-0807-462a-b6c8-2225da1f5654"></elevenlabs-convai>
    </>
  );
};

export default VoiceAgent;
