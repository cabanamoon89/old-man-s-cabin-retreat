import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bed,
  Sofa,
  Bath,
  ChefHat,
  TreePine,
  Waves,
  Car,
  Tv,
  Lamp,
  Coffee,
} from "lucide-react";
import bedroom from "@/assets/bedroom.jpg";

const facilities = [
  { icon: Bed, label: "Dormitor confortabil" },
  { icon: Sofa, label: "Living open space" },
  { icon: Bath, label: "Baie modernă" },
  { icon: ChefHat, label: "Bucătărie utilată" },
  { icon: TreePine, label: "Terasă privată" },
  { icon: Waves, label: "Ciubăr / Hot Tub" },
  { icon: Car, label: "Parcare privată" },
  { icon: Tv, label: "Smart TV cu Netflix" },
  { icon: Lamp, label: "Lumini ambientale" },
  { icon: Coffee, label: "Cafea & ceai incluse" },
];

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="facilitati" className="section-padding bg-cabin-charcoal text-cabin-cream" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cabin-gold text-sm tracking-[0.2em] uppercase mb-4">
              Facilități
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cabin-cream mb-8">
              Tot ce ai nevoie pentru
              <br />
              <span className="italic text-cabin-gold">o evadare perfectă</span>
            </h2>
            
            <div className="w-16 h-px bg-cabin-gold mb-10" />

            <div className="grid grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="flex items-center gap-3 p-3 rounded-sm hover:bg-cabin-cream/5 transition-colors"
                >
                  <facility.icon className="w-5 h-5 text-cabin-gold flex-shrink-0" />
                  <span className="text-cabin-cream/90 text-sm md:text-base">
                    {facility.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={bedroom}
                alt="Dormitor cu priveliște"
                className="image-cover"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-cabin-gold/5 rounded-sm -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
