import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Brain, Building2, Clock } from "lucide-react";
import hotTub from "@/assets/hot-tub.jpg";

const audiences = [
  {
    icon: Heart,
    title: "Cupluri",
    description: "Momente romantice într-un cadru intim și spectaculos",
  },
  {
    icon: Sparkles,
    title: "Weekend romantic",
    description: "Evadare de la rutină, doar voi doi și natura",
  },
  {
    icon: Brain,
    title: "Reset mental",
    description: "Pauza de care ai nevoie pentru a te reconecta cu tine",
  },
  {
    icon: Building2,
    title: "Evadare din oraș",
    description: "Lasă în urmă zgomotul și agitația urbană",
  },
  {
    icon: Clock,
    title: "Slow weekends",
    description: "Pentru cei care apreciază timpul lent și conștient",
  },
];

const ForWhomSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={hotTub}
                alt="Ciubăr cu vedere la munți"
                className="image-cover"
              />
            </div>
            {/* Quote overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-sm">
              <p className="font-heading text-lg italic text-foreground">
                "Aici timpul încetinește și fiecare moment devine special."
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              Pentru cine este cabana
            </p>
            <h2 className="text-headline text-foreground mb-8">
              Creată pentru suflete care
              <br />
              <span className="italic text-primary">caută liniștea</span>
            </h2>
            
            <div className="divider !mx-0 mb-10" />

            <div className="space-y-4">
              {audiences.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 rounded-sm hover:bg-background transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <audience.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {audience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
