import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import cabinExterior from "@/assets/cabin-exterior.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="despre" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={cabinExterior}
                alt="Old Man's Cabin - exterior"
                className="image-cover hover-scale"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 rounded-sm hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              Povestea noastră
            </p>
            <h2 className="text-headline text-foreground mb-8">
              Un refugiu născut din
              <br />
              <span className="italic text-primary">dorința de liniște</span>
            </h2>
            
            <div className="divider !mx-0 mb-8" />

            <div className="space-y-6 text-muted-foreground text-body-large">
              <p>
                Old Man's Cabin a fost creată cu un singur scop: să ofere un spațiu 
                unde timpul încetinește, iar grijile rămân în urmă.
              </p>
              <p>
                Amplasată pe dealurile Măgurilor, cu priveliște panoramică spre 
                munți și văi, cabana noastră este locul perfect pentru cei care 
                caută să se reconecteze cu natura și cu ei înșiși.
              </p>
              <p>
                Fiecare detaliu a fost gândit pentru confort și relaxare — de la 
                ferestrele mari care aduc peisajul înăuntru, la ciubărul fierbinte 
                sub cerul liber.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <p className="font-heading text-4xl text-primary">1200m</p>
                <p className="text-sm text-muted-foreground mt-1">altitudine</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-heading text-4xl text-primary">360°</p>
                <p className="text-sm text-muted-foreground mt-1">priveliște</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-heading text-4xl text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">intimitate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
