import { motion } from "framer-motion";
import { BrainCircuit, Users, Hammer, Globe2, Layers, Award, Radio } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ResearchDirection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Direction</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I build and evaluate human-centered medical technologies that work in real clinical workflows—especially in low-resource and pediatric settings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What I want to do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-primary">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">01</span>
              What I want to do at the Media Lab
            </h3>
            
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <BrainCircuit className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Edge AI for point-of-care diagnostics</h4>
                    <p className="text-sm text-muted-foreground">Focus on ultrasound and physio signals processing on-device.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Design for trust, usability, and safety</h4>
                    <p className="text-sm text-muted-foreground">Tailored for non-expert users in complex environments.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <Hammer className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Translational prototyping</h4>
                    <p className="text-sm text-muted-foreground">Needs-finding → Iterative build → Validation with clinicians.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4 items-start">
                  <Globe2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Remote collaboration pipelines</h4>
                    <p className="text-sm text-muted-foreground">Telemedicine solutions that reduce geographic inequities.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* What I bring */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-primary">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">02</span>
              What I bring
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 border-l-4 border-primary bg-background shadow-xs">
                <Layers className="w-6 h-6 text-muted-foreground shrink-0" />
                <div>
                  <h4 className="font-semibold">Full-stack prototyping</h4>
                  <p className="text-muted-foreground">Hardware + Software + Deployment mindset. Bridging the gap between theory and practice.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border-l-4 border-primary bg-background shadow-xs">
                <Award className="w-6 h-6 text-muted-foreground shrink-0" />
                <div>
                  <h4 className="font-semibold">Evidence of impact</h4>
                  <p className="text-muted-foreground">Awards, publications, and real-world partnerships that validate the approach.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border-l-4 border-primary bg-background shadow-xs">
                <Radio className="w-6 h-6 text-muted-foreground shrink-0" />
                <div>
                  <h4 className="font-semibold">Research experience</h4>
                  <p className="text-muted-foreground">Across sensing (EEG/EMG/ECG/ultrasound), AI, and HCI domains.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
