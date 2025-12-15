import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Import images
import bioCosMeImg from "@assets/generated_images/biosensor_cosmetics_concept_art.png";
import emgImg from "@assets/generated_images/biomechanics_lab_setup_with_emg_sensors.png";
import motionCaptureImg from "@assets/generated_images/abstract_motion_capture_wireframe_visualization.png";

export default function SmallerProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 border-b border-border pb-4">Additional Research Lines</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="col-span-1"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="h-40 overflow-hidden">
                 <img src={motionCaptureImg} alt="Motion Capture" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Project 3</Badge>
                <CardTitle className="leading-tight text-xl">Markerless Motion Capture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <p className="text-sm text-muted-foreground font-medium">
                  Synthesizing evidence on measurement error when markerless systems are used in tasks involving objects/load.
                </p>
                
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">My Role</p>
                  <p className="text-sm">Lead author; protocol design, screening, extraction, risk-of-bias.</p>
                </div>

                <div className="pt-2 mt-auto">
                   <p className="text-xs bg-muted p-2 rounded-sm border border-border text-center">Manuscript in review (Technologies, MDPI)</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="col-span-1"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="h-40 overflow-hidden">
                 <img src={bioCosMeImg} alt="BioCosMe" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Project 4</Badge>
                <CardTitle className="text-xl">BioCosMe</CardTitle>
                <p className="text-sm text-muted-foreground">Lip-based cosmetics with colorimetric biosensors</p>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Role</p>
                  <p className="text-sm">Research + integration support at UC Davis Interactive Organisms Lab.</p>
                </div>
                <div className="pt-2 mt-auto">
                   <p className="text-xs bg-muted p-2 rounded-sm border border-border text-center">UbiComp/ISWC Note (2024)</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="col-span-1"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="h-40 overflow-hidden">
                 <img src={emgImg} alt="EMG Research" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Project 5</Badge>
                <CardTitle className="text-xl">Biomechanics + EMG</CardTitle>
                <p className="text-sm text-muted-foreground">PUCP Applied Robotics Group</p>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2 items-start">
                    <span className="text-primary">•</span> 
                    sEMG study on muscles involved in stuttering disfluencies
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-primary">•</span> 
                    Smartphone posture/neck muscle activity study
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-primary">•</span> 
                    Hand exoskeleton rehabilitation project
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
