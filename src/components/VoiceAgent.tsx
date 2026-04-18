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
      <elevenlabs-convai agent-id="agent_7801kpha4bnee6k8032z1hajk639"></elevenlabs-convai>
    </>
  );
};

export default VoiceAgent;
