import { MessageCircleMore } from "lucide-react";

import { siteConfig } from "@/content/site";

const WhatsAppButton = () => {
  const message =
    "Hi, I would like to know more about Schoolars Hub tuition classes.";
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      aria-label="Chat with Schoolars Hub on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.03] hover:bg-[#1fb95a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      href={whatsappUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircleMore className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
};

export default WhatsAppButton;
