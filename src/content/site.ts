import {
  Atom,
  BookOpen,
  Calculator,
  Globe,
  GraduationCap,
  Landmark,
  Languages,
  LucideIcon,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export interface SubjectOffering {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  grades: string;
  outcomes: string[];
}

export interface FeePlan {
  name: string;
  monthlyFee: string;
  description: string;
  studentRange: string;
  highlights: string[];
  popular?: boolean;
}

export interface CampusLocation {
  name: string;
  area: string;
  description: string;
}

export const siteConfig = {
  brandName: "Schoolars Hub",
  shortTagline: "Learn with clarity. Grow with confidence.",
  description:
    "Structured tuition support for students in Goa with clear teaching, parent updates, and practical academic planning.",
  foundedYear: "2021",
  phones: ["+91 88303 68198", "+91 95793 39227"],
  whatsappNumber: "918830368198",
  email: "info@schoolarshub.com",
  instagram: "https://www.instagram.com/scholarshubgoa",
  googleReviewsUrl: "https://share.google/IQD21xKvKrogKBaU4",
  timings: {
    regular: "3:00 PM - 6:30 PM",
    exam: "3:00 PM - 8:00 PM",
  },
  upiId: "scholarshubtivim@sbi",
} as const;

export const heroHighlights = [
  "Small-group guidance with individual attention",
  "Clear support for schoolwork, exam prep, and revision",
  "Two Goa locations with parent-friendly communication",
];

export const proofStats = [
  {
    label: "Years serving families",
    value: "Since 2021",
    icon: GraduationCap,
  },
  {
    label: "Core subjects",
    value: "7 subjects",
    icon: BookOpen,
  },
  {
    label: "Google review proof",
    value: "40+ reviews",
    icon: Star,
  },
  {
    label: "Accessible campuses",
    value: "2 Goa locations",
    icon: MapPin,
  },
];

export const trustSignals = [
  {
    title: "Transparent fees and payment steps",
    description:
      "Parents can review monthly fees, payment confirmation steps, and direct contact options before enrolling.",
    icon: ShieldCheck,
  },
  {
    title: "Parent updates that do not feel like guesswork",
    description:
      "The journey from inquiry to enrollment is clearer, with expectations, timings, and subject coverage explained upfront.",
    icon: Users,
  },
  {
    title: "Focused teaching for foundational subjects",
    description:
      "Science, Maths, English, Hindi, Konkani, Geography, and History are presented with clear progression.",
    icon: BookOpen,
  },
];

export const learningApproach = [
  {
    step: "01",
    title: "Assess the student's current level",
    description:
      "We begin with class details, subject needs, and the student's current confidence level so the plan matches reality.",
  },
  {
    step: "02",
    title: "Align timetable, subjects, and goals",
    description:
      "Families get guidance on the best class slot, the right subjects to focus on, and the expected learning rhythm.",
  },
  {
    step: "03",
    title: "Track progress with consistency",
    description:
      "Ongoing support focuses on revision discipline, exam readiness, and staying in touch with parents when needed.",
  },
];

export const campusLocations: CampusLocation[] = [
  {
    name: "Thivim Centre",
    area: "Bardez, Goa",
    description:
      "A dependable after-school option for families in North Goa looking for structured evening learning support.",
  },
  {
    name: "Corlim Centre",
    area: "Old Goa",
    description:
      "A convenient learning base for families who want closer access to subject guidance and exam preparation support.",
  },
];

export const subjects: SubjectOffering[] = [
  {
    title: "Science",
    description:
      "Concept-first teaching across physics, chemistry, and biology so students understand and remember what they learn.",
    icon: Atom,
    accent: "from-amber-400 to-orange-500",
    grades: "Classes 5-12",
    outcomes: [
      "Concept reinforcement",
      "Practical examples",
      "Exam-oriented revision",
    ],
  },
  {
    title: "Mathematics",
    description:
      "Step-by-step problem solving that improves confidence, speed, and accuracy across school-level maths.",
    icon: Calculator,
    accent: "from-sky-400 to-cyan-500",
    grades: "Classes 1-12",
    outcomes: ["Stronger basics", "Practice support", "Board prep focus"],
  },
  {
    title: "English",
    description:
      "Balanced support in grammar, reading, writing, and classroom communication skills.",
    icon: BookOpen,
    accent: "from-emerald-400 to-teal-500",
    grades: "Classes 1-12",
    outcomes: ["Writing clarity", "Grammar support", "Reading confidence"],
  },
  {
    title: "Hindi",
    description:
      "Language coaching that helps students improve grammar, comprehension, and written expression.",
    icon: Languages,
    accent: "from-fuchsia-400 to-pink-500",
    grades: "Classes 1-10",
    outcomes: ["Grammar coverage", "Writing practice", "Comprehension help"],
  },
  {
    title: "Konkani",
    description:
      "Regional language support that respects school curriculum needs and local learning context.",
    icon: MessageSquare,
    accent: "from-lime-400 to-green-500",
    grades: "Classes 1-10",
    outcomes: ["Language confidence", "Cultural context", "Exam revision"],
  },
  {
    title: "Geography",
    description:
      "Easy-to-follow explanations for maps, climate, places, and real-world understanding.",
    icon: Globe,
    accent: "from-cyan-400 to-blue-500",
    grades: "Classes 5-12",
    outcomes: ["Map practice", "Concept retention", "Revision support"],
  },
  {
    title: "History",
    description:
      "Structured storytelling and timeline-based teaching to make history easier to understand and recall.",
    icon: Landmark,
    accent: "from-rose-400 to-red-500",
    grades: "Classes 5-12",
    outcomes: ["Chapter clarity", "Timeline memory", "Answer framing"],
  },
];

export const testimonials = [
  {
    name: "Sudesh Rivonkar",
    role: "Google Review",
    content:
      "The environment is friendly, and they give personal attention to each student.",
    rating: 5,
  },
  {
    name: "Alka Rivonkar",
    role: "Google Review",
    content:
      "The study environment is professional and highly motivating.",
    rating: 5,
  },
  {
    name: "Gaurish Kudalkar",
    role: "Google Review",
    content:
      "It's really good experience here and teachers are really good.",
    rating: 5,
  },
  {
    name: "Rahul Naik",
    role: "Student",
    content:
      "The science sessions really helped me understand concepts that felt difficult in school.",
    rating: 5,
  },
];

export const feePlans: FeePlan[] = [
  {
    name: "Foundation Plan",
    monthlyFee: "INR 700",
    description: "For middle school learners who need structured daily support.",
    studentRange: "Class 5 to 8",
    highlights: [
      "Multi-subject support",
      "Daily class structure",
      "Revision and doubt clearing",
      "Guidance for regular schoolwork",
    ],
  },
  {
    name: "Board Prep Plan",
    monthlyFee: "INR 1,000",
    description:
      "For students preparing for tighter academic expectations and board-focused study.",
    studentRange: "Class 9 to 10",
    highlights: [
      "Board exam preparation support",
      "Focused revision windows",
      "Weekly doubt resolution",
      "Exam-time extended schedule",
    ],
    popular: true,
  },
];

export const faqs = [
  {
    question: "What timings do the classes follow?",
    answer:
      "Regular classes usually run from 3:00 PM to 6:30 PM, and exam-time support can extend up to 8:00 PM.",
  },
  {
    question: "How do families confirm enrollment after payment?",
    answer:
      "After payment, families can send a screenshot on WhatsApp with the student's name and class so the enrollment can be confirmed quickly.",
  },
  {
    question: "Which classes and subjects are covered?",
    answer:
      "The centre supports students across Classes 1 to 12 depending on the subject, with current focus on Science, Maths, English, Hindi, Konkani, Geography, and History.",
  },
  {
    question: "Can parents ask for guidance before enrolling?",
    answer:
      "Yes. The inquiry form is designed for that exact purpose, and families can also call or message on WhatsApp for class-fit guidance.",
  },
];

export const inquiryTopics = [
  "Fee details",
  "Subject guidance",
  "Class timings",
  "Campus availability",
  "Enrollment support",
] as const;
