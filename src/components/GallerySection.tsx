import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import livingRoom from "@/assets/living-room.jpg";
import bedroom from "@/assets/bedroom.jpg";
import bathroom from "@/assets/bathroom.jpg";
import hotTub from "@/assets/hot-tub.jpg";
import terraceSunset from "@/assets/terrace-sunset.jpg";
import terraceNight from "@/assets/terrace-night.jpg";
import livingChristmas from "@/assets/living-christmas.jpg";
import cabinExterior from "@/assets/cabin-exterior.jpg";

const images = [
  { src: livingRoom, alt: "Living cu priveliște panoramică", span: "lg:col-span-2 lg:row-span-2" },
  { src: bedroom, alt: "Dormitor cu vedere la răsărit", span: "" },
  { src: hotTub, alt: "Ciubăr cu apă caldă", span: "" },
  { src: bathroom, alt: "Baie modernă", span: "" },
  { src: terraceSunset, alt: "Terasă la apus", span: "" },
  { src: terraceNight, alt: "Atmosferă de seară", span: "lg:col-span-2" },
  { src: livingChristmas, alt: "Interior cozy", span: "" },
  { src: cabinExterior, alt: "Cabana văzută din exterior", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galerie" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Galerie
          </p>
          <h2 className="text-headline text-foreground mb-6">
            Imagini care <span className="italic text-primary">spun povești</span>
          </h2>
          <p className="text-muted-foreground text-body-large">
            Descoperă atmosfera unică a cabanei noastre
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`aspect-square ${image.span.includes("row-span-2") ? "lg:aspect-auto lg:h-full" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="image-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cabin-charcoal/0 group-hover:bg-cabin-charcoal/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-cabin-cream text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-cabin-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-cabin-cream hover:text-cabin-gold transition-colors"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Imagine mărită"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
