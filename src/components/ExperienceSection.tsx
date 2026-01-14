import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Flame, Mountain, Lamp, Wifi, Tv } from "lucide-react";

const experiences = [
  {
    icon: TreePine,
    title: "Liniște și natură",
    description: "Departe de agitația orașului, înconjurați doar de pădure și munte",
  },
  {
    icon: Flame,
    title: "Ciubăr cu apă caldă",
    description: "Relaxare sub cerul liber, cu priveliște spre văi și stele",
  },
  {
    icon: Mountain,
    title: "Priveliște panoramică",
    description: "Ferestre generoase care aduc peisajul montan în interior",
  },
  {
    icon: Lamp,
    title: "Atmosferă cozy",
    description: "Lumini calde, lemn natural și detalii gândite pentru confort",
  },
  {
    icon: Wifi,
    title: "Deconectare reală",
    description: "Wi-Fi disponibil, dar invitația e să te bucuri de momentul prezent",
  },
  {
    icon: Tv,
    title: "Netflix & relax",
    description: "Pentru serile ploioase sau momentele de răsfăț în interior",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experienta" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Ce te așteaptă
          </p>
          <h2 className="text-headline text-foreground mb-6">
            Experiența <span className="italic text-primary">Old Man's Cabin</span>
          </h2>
          <p className="text-muted-foreground text-body-large">
            Mai mult decât o cazare — un mod de a trăi momentul prezent
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-8 bg-background rounded-sm shadow-soft hover-lift"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <exp.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                {exp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
