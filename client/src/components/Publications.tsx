import { FileText, Trophy, Newspaper } from "lucide-react";

export default function Publications() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Selected Publications</h2>
            </div>
            <ul className="space-y-6 text-primary-foreground/90 font-light">
              <li className="pl-4 border-l border-primary-foreground/30">
                <span className="font-semibold block mb-1">sEMG study on muscles involved in stuttering disfluencies</span>
                <span className="text-sm opacity-80">Sensors 2024</span>
              </li>
              <li className="pl-4 border-l border-primary-foreground/30">
                <span className="font-semibold block mb-1">Smartphone posture/neck muscle activity study</span>
                <span className="text-sm opacity-80">IEEE INTERCON 2024</span>
              </li>
              <li className="pl-4 border-l border-primary-foreground/30">
                <span className="font-semibold block mb-1">BioCosMe: Lip-based cosmetics with colorimetric biosensors</span>
                <span className="text-sm opacity-80">UbiComp/ISWC Note (2024)</span>
              </li>
              <li className="pl-4 border-l border-primary-foreground/30">
                <span className="font-semibold block mb-1">Markerless motion capture for human–object interaction</span>
                <span className="text-sm opacity-80">Technologies, MDPI (In Review)</span>
              </li>
              <li className="pl-4 border-l border-primary-foreground/30">
                <span className="font-semibold block mb-1">Pulpi: Child-centered ECG wearable</span>
                <span className="text-sm opacity-80">CNIB 2025 Proceedings</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Awards</h2>
              </div>
              <ul className="space-y-4 text-primary-foreground/90">
                <li className="flex gap-4 items-start">
                  <span className="font-mono text-accent text-lg">01</span>
                  <div>
                    <span className="font-bold block">2nd Place — Johns Hopkins Healthcare Design Competition 2025</span>
                    <span className="text-sm opacity-80">Digital Health Track</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="font-mono text-accent text-lg">02</span>
                  <div>
                    <span className="font-bold block">2nd Place — Runayay Cayetano Prototype Competition 2024</span>
                    <span className="text-sm opacity-80">For Pulpi project</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="font-mono text-accent text-lg">03</span>
                  <div>
                    <span className="font-bold block">Patent Application Filed (INDECOPI)</span>
                    <span className="text-sm opacity-80">Co-inventor for Pulpi device</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Prototyping (ESP32/AD8232)", "Python", "ML/DL", "Ultrasound", "ECG", "EEG", "Usability Testing", "Workflow Thinking"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
