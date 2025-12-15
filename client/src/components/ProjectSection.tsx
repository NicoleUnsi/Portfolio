import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  oneLiner: string;
  context: string;
  role: string;
  whatIDid: string[];
  evidence: string[];
  images: string[];
  imageAlt: string;
  index: number;
  reverse?: boolean;
}

export default function ProjectSection({
  title,
  subtitle,
  oneLiner,
  context,
  role,
  whatIDid,
  evidence,
  images,
  imageAlt,
  index,
  reverse = false,
}: ProjectSectionProps) {
  return (
    <section className={`py-20 overflow-hidden ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2">
              <Badge variant="outline" className="text-primary border-primary/30 mb-4">Project {index + 1}</Badge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-foreground">{title}</h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">{subtitle}</h3>
            
            <p className="text-lg font-medium text-primary mb-8 italic border-l-4 border-primary pl-4 py-1 bg-primary/5">
              "{oneLiner}"
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Context</h4>
                <p className="text-foreground/80 leading-relaxed">{context}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">My Role</h4>
                <p className="text-foreground/80 font-medium">{role}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">What I Did</h4>
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80">
                  {whatIDid.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Evidence / Outcomes</h4>
                <ul className="space-y-3">
                  {evidence.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/90 bg-card p-3 rounded-md border border-border text-sm">
                      <span className="text-primary font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Visuals */}
          <motion.div 
            className="flex-1 flex flex-col gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {images.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-xl border border-border/50 bg-card">
                <AspectRatio ratio={16 / 9}>
                  <img src={img} alt={`${imageAlt} ${i + 1}`} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                </AspectRatio>
                <div className="p-3 bg-card border-t border-border">
                  <p className="text-xs text-muted-foreground text-center font-mono">Figure {index + 1}.{i + 1}: {imageAlt}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
