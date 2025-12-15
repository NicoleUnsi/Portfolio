import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, MapPin, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide">
            PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            Nicole Doris <br className="hidden md:block" />
            <span className="text-primary">Unsihuay Vila</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-light">
            Human-Centered Medical Devices + Edge AI for Real Care Settings
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-10 text-sm md:text-base text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lima, Peru</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>nunsihuayvila@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+51 956 402 754</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/nicole-doris-unsihuay-vila-b95b941b7" target="_blank">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://scholar.google.com/citations?hl=es&user=iLb8UNEAAAAJ&view_op=list_works&gmla=AElLoL3tbNgpgAKibJ4XfaU1RZhSEuFfcrGq8fdPqyFjUcQDipkaf9XRLKP051CS7nG6pL64XSriLoU1ldknpicelMe9tVgduY1VpSaL" target="_blank">
                <GraduationCap className="w-4 h-4" /> Google Scholar
              </a>
            </Button>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg shadow-sm max-w-2xl">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Focus</h3>
            <p className="text-lg font-medium text-foreground">
              Point-of-care ultrasound + pediatric wearables + translational prototyping in low-resource settings.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-primary/5 to-transparent -z-10 skew-x-12 origin-top-right blur-3xl opacity-50" />
    </section>
  );
}
