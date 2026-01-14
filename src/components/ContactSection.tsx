import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, Instagram, Facebook } from "lucide-react";
import terraceSunset from "@/assets/terrace-sunset.jpg";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Mulțumim pentru mesaj! Vom reveni cu un răspuns în cel mai scurt timp.");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              Contact
            </p>
            <h2 className="text-headline text-foreground mb-6">
              Rezervă-ți
              <br />
              <span className="italic text-primary">liniștea</span>
            </h2>
            <p className="text-muted-foreground text-body-large mb-10">
              Pentru disponibilitate și rezervări, ne poți contacta direct. 
              Vom răspunde în cel mai scurt timp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nume complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Numele tău"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="email@exemplu.ro"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Scrie-ne despre perioada dorită și orice întrebare ai avea..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Trimite mesajul
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Image & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={terraceSunset}
                alt="Terasă la apus"
                className="image-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+40700000000"
                className="p-6 bg-background rounded-sm shadow-soft hover-lift flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Telefon</p>
                  <p className="text-sm font-medium text-foreground">+40 700 000 000</p>
                </div>
              </a>

              <a
                href="mailto:contact@oldmanscabin.ro"
                className="p-6 bg-background rounded-sm shadow-soft hover-lift flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="text-sm font-medium text-foreground">contact@oldmanscabin.ro</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/oldmanscabin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 bg-background rounded-sm shadow-soft hover-lift flex items-center justify-center gap-3"
              >
                <Instagram className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://facebook.com/oldmanscabin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 bg-background rounded-sm shadow-soft hover-lift flex items-center justify-center gap-3"
              >
                <Facebook className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
