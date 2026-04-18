import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { localBusinessJsonLd } from "@/lib/structuredData";
import { AnimatedSection } from "@/components/AnimatedSection";

// Imported images from public directory
const galleryImages = [
  { id: 1, src: "/gallery/media__1776553220783.jpg", alt: "Students engaged in a class discussion" },
  { id: 2, src: "/gallery/media__1776553220792.jpg", alt: "Student eating a snack during break" },
  { id: 3, src: "/gallery/media__1776553221092.jpg", alt: "Students talking near the campus garden" },
  { id: 4, src: "/gallery/media__1776553221130.jpg", alt: "Parents and teachers interacting" },
  { id: 5, src: "/gallery/media__1776553221134.jpg", alt: "Students enjoying outdoor time" },
];

const Gallery = () => {
  return (
    <Layout>
      <SEO
        title="Gallery | Schoolars Hub Goa"
        description="View photos of our campus, events, and student life at Schoolars Hub coaching centre in Goa."
        canonical="/gallery"
        jsonLd={localBusinessJsonLd}
      />

      <div className="section-shell pb-20 pt-10 md:pt-16">
        <div className="container px-4">
          <SectionTitle
            title="Campus Life & Events"
            subtitle="Take a look at the supportive and engaging environment we've built for our students and their families."
            eyebrow="Gallery"
          />

          {/* Masonry Layout inspired by 21st.dev */}
          <div className="mx-auto mt-12 max-w-6xl">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-4">
              {galleryImages.map((image, index) => (
                <AnimatedSection
                  key={image.id}
                  variant="fade-up"
                  delay={index * 100}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 rounded-2xl pointer-events-none" />
                  <img
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105 bg-slate-100"
                    loading="lazy"
                    src={image.src}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
