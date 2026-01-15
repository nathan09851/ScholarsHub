import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '918830368198';
  const message = 'Hi, I would like to know more about Schoolars Hub tuition classes.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] hover:scale-110 transition-all duration-300 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
