import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Car } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locatie" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Locație
          </p>
          <h2 className="text-headline text-foreground mb-6">
            Unde ne <span className="italic text-primary">găsești</span>
          </h2>
          <p className="text-muted-foreground text-body-large">
            Situată în Măguri, Cluj, cabana oferă priveliști spectaculoase și liniște deplină.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="p-6 bg-secondary/50 rounded-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">Adresă</h3>
                  <p className="text-muted-foreground text-sm">Măguri, Cluj</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Într-o zonă izolată, cu acces facil dar departe de zgomot.
              </p>
            </div>

            <div className="p-6 bg-secondary/50 rounded-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">Acces</h3>
                  <p className="text-muted-foreground text-sm">45 min din Cluj-Napoca</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Drum asfaltat până aproape de cabană, parcare privată disponibilă.
              </p>
            </div>

            <div className="p-6 bg-secondary/50 rounded-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">Check-in</h3>
                  <p className="text-muted-foreground text-sm">Flexibil</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Check-in de la 15:00, check-out până la 11:00. Flexibilitate pentru oaspeți.
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21829.066018682!2d23.24!3d46.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1f916c0b8d%3A0x7c8f7e8b3f1d0c0!2sM%C4%83guri-R%C4%83c%C4%83t%C4%83u!5e0!3m2!1sen!2sro!4v1705000000000!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație Old Man's Cabin"
              />
            </div>
            {/* Overlay pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <div className="relative">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-elevated">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
