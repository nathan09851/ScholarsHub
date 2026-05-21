import { useState } from "react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { localBusinessJsonLd } from "@/lib/structuredData";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Image categories for filtering
const categories = ["All", "Campus", "Trips & Events"];

// Gallery images — all using WebP (97–98% smaller than raw JPEGs)
// Fallback src points to original for browsers without WebP support (Edge Legacy only)
const galleryImages = [
  { id: 1, src: "/gallery-webp/media__1776553220783.webp", fallback: "/gallery-images/media__1776553220783.jpg", alt: "Students engaged in a class discussion", category: "Campus" },
  { id: 2, src: "/gallery-webp/media__1776553220792.webp", fallback: "/gallery-images/media__1776553220792.jpg", alt: "Student eating a snack during break", category: "Campus" },
  { id: 3, src: "/gallery-webp/media__1776553221092.webp", fallback: "/gallery-images/media__1776553221092.jpg", alt: "Students talking near the campus garden", category: "Campus" },
  { id: 4, src: "/gallery-webp/media__1776555466477.webp", fallback: "/gallery-images/media__1776555466477.jpg", alt: "Student with a backpack", category: "Campus" },
  { id: 5, src: "/gallery-webp/media__1776553221134.webp", fallback: "/gallery-images/media__1776553221134.jpg", alt: "Students enjoying outdoor time", category: "Campus" },
  { id: 6, src: "/gallery-webp/media__1776553221130.webp", fallback: "/gallery-images/media__1776553221130.jpg", alt: "Students collaborating on a project", category: "Campus" },
  // Trip & Event Images
  { id: 7,  src: "/gallery-webp/IMG_1691.webp",  fallback: "/gallery-images/IMG_1691.JPG",  alt: "Student splashing in the pool during the school trip", category: "Trips & Events" },
  { id: 8,  src: "/gallery-webp/IMG_1731.webp",  fallback: "/gallery-images/IMG_1731.JPG",  alt: "Cheerful student enjoying the pool outing", category: "Trips & Events" },
  { id: 9,  src: "/gallery-webp/IMG_2054.webp",  fallback: "/gallery-images/IMG_2054.JPG",  alt: "Students having fun in the water", category: "Trips & Events" },
  { id: 10, src: "/gallery-webp/IMG_1726.webp",  fallback: "/gallery-images/IMG_1726.JPG",  alt: "Exciting moment during the school picnic", category: "Trips & Events" },
  { id: 11, src: "/gallery-webp/IMG_1752.webp",  fallback: "/gallery-images/IMG_1752.JPG",  alt: "Students participating in outdoor activities", category: "Trips & Events" },
  { id: 12, src: "/gallery-webp/IMG_1757.webp",  fallback: "/gallery-images/IMG_1757.JPG",  alt: "Fun times at the water park", category: "Trips & Events" },
  { id: 13, src: "/gallery-webp/IMG_1765.webp",  fallback: "/gallery-images/IMG_1765.JPG",  alt: "Student groups enjoying the sunny day", category: "Trips & Events" },
  { id: 14, src: "/gallery-webp/IMG_1771.webp",  fallback: "/gallery-images/IMG_1771.JPG",  alt: "Laughter and joy during the field trip", category: "Trips & Events" },
  { id: 15, src: "/gallery-webp/IMG_1782.webp",  fallback: "/gallery-images/IMG_1782.JPG",  alt: "Memories from the annual school outing", category: "Trips & Events" },
  { id: 16, src: "/gallery-webp/IMG_1819.webp",  fallback: "/gallery-images/IMG_1819.JPG",  alt: "Students bonding outside the classroom", category: "Trips & Events" },
  { id: 17, src: "/gallery-webp/IMG_1862.webp",  fallback: "/gallery-images/IMG_1862.JPG",  alt: "Water slide fun with students", category: "Trips & Events" },
  { id: 18, src: "/gallery-webp/IMG_1864.webp",  fallback: "/gallery-images/IMG_1864.JPG",  alt: "Exciting slide action at the park", category: "Trips & Events" },
  { id: 19, src: "/gallery-webp/IMG_1869.webp",  fallback: "/gallery-images/IMG_1869.JPG",  alt: "Group of students at the top of the slide", category: "Trips & Events" },
  { id: 20, src: "/gallery-webp/IMG_1871.webp",  fallback: "/gallery-images/IMG_1871.JPG",  alt: "Getting ready for a splash", category: "Trips & Events" },
  { id: 21, src: "/gallery-webp/IMG_1954.webp",  fallback: "/gallery-images/IMG_1954.JPG",  alt: "Student smiling for a photo at the event", category: "Trips & Events" },
  { id: 22, src: "/gallery-webp/IMG_2037.webp",  fallback: "/gallery-images/IMG_2037.JPG",  alt: "Candid moment of student life", category: "Trips & Events" },
  { id: 23, src: "/gallery-webp/IMG_2038.webp",  fallback: "/gallery-images/IMG_2038.JPG",  alt: "Friends enjoying the school trip together", category: "Trips & Events" },
  { id: 24, src: "/gallery-webp/group-photo.webp", fallback: "/gallery-images/group-photo.jpeg", alt: "Group photo of students and teachers", category: "Trips & Events" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <div className="mx-auto max-w-6xl min-h-[400px]">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-4">
              {filteredImages.map((image, index) => (
                <div key={`${image.id}-${activeCategory}`}>
                  <AnimatedSection
                    variant="fade-up"
                    delay={Math.min(index * 50, 400)} // cap stagger at 400ms
                    className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative overflow-hidden rounded-2xl">
                          <div className="absolute inset-0 bg-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 flex items-center justify-center">
                            <span className="rounded-full bg-card/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                              View Photo
                            </span>
                          </div>
                          {/* <picture> provides WebP with JPEG fallback for legacy browsers */}
                          <picture>
                            <source srcSet={image.src} type="image/webp" />
                            <img
                              alt={image.alt}
                              className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105 bg-muted"
                              loading="lazy"
                              decoding="async"
                              src={image.fallback}
                              width={700}
                              height={525}
                            />
                          </picture>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                        <div className="relative group">
                          <picture>
                            <source srcSet={image.src} type="image/webp" />
                            <img
                              src={image.fallback}
                              alt={image.alt}
                              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
                          <div className="bg-card/90 backdrop-blur-md p-4 mt-2 rounded-lg">
                            <p className="text-foreground font-medium text-center">{image.alt}</p>
                            <p className="text-muted-foreground text-xs text-center mt-1 uppercase tracking-wider">{image.category}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </AnimatedSection>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
