import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import mountainsFog from "@/assets/mountains-fog.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mountainsFog}
          alt="Munți învăluiți în ceață"
          className="image-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-cabin-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Măguri, Cluj
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-cabin-cream text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
        >
          Liniștea pe care
          <br />
          <span className="italic">o cauți</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-cabin-cream/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          O cabană intimă, creată pentru relaxare, priveliști spectaculoase și momente simple.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-cabin-cream text-cabin-charcoal font-medium tracking-wide hover:bg-cabin-gold transition-colors duration-300 rounded-sm"
          >
            Verifică disponibilitatea
          </a>
          <a
            href="#despre"
            className="px-8 py-4 border border-cabin-cream/40 text-cabin-cream font-medium tracking-wide hover:bg-cabin-cream/10 transition-colors duration-300 rounded-sm"
          >
            Descoperă cabana
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#despre"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cabin-cream/60 hover:text-cabin-cream transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
