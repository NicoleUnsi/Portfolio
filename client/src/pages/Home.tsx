import Hero from "@/components/Hero";
import ResearchDirection from "@/components/ResearchDirection";
import ProjectSection from "@/components/ProjectSection";
import SmallerProjects from "@/components/SmallerProjects";
import Publications from "@/components/Publications";

// Import assets
import ecoAssistImg from "@assets/generated_images/ultrasound_interface_with_kidney_segmentation_overlay.png";
import pulpiImg from "@assets/generated_images/octopus-inspired_pediatric_wearable_device.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Hero />
      
      <ResearchDirection />
      
      <div id="projects">
        <ProjectSection 
          index={0}
          title="EcoAssist"
          subtitle="AI-assisted ultrasound for liver/kidney identification"
          oneLiner="Real-time guidance for non-specialists to capture usable ultrasound images + enable teleconsultation."
          context="Resource-limited hospitals often lack expert sonographers; image quality and correct views are a bottleneck for diagnosis."
          role="Team lead / AI + application development"
          whatIDid={[
            "Trained a deep learning model for kidney detection/segmentation in ultrasound",
            "Integrated inference into an application for real-time feedback during scanning",
            "Designed workflow to store original + highlighted recordings and support remote review"
          ]}
          evidence={[
            "2nd Place — Johns Hopkins Healthcare Design Competition 2025 (Digital Health Track)",
            "Proof-of-concept deployment/trial in a rural hospital in Cusco (Vidawasi context)"
          ]}
          images={[ecoAssistImg]}
          imageAlt="UI overlay segmentation on ultrasound"
        />

        <ProjectSection 
          index={1}
          reverse={true}
          title="Pulpi"
          subtitle="Child-centered ECG wearable for screening"
          oneLiner="A pediatric ECG device designed to reduce fear and improve signal quality in real screening contexts."
          context="Kids often resist clinical sensors; comfort and anxiety directly affect data quality and adoption."
          role="Co-lead designer/developer; device + narrative + prototyping."
          whatIDid={[
            "Designed a child-friendly form factor (octopus-inspired) to improve acceptance",
            "Built biosignal acquisition prototype using AD8232 + ESP32",
            "Positioned the system for early screening of congenital heart disease (e.g., VSD)",
            "Coordinated prototyping/iteration for competitions and dissemination"
          ]}
          evidence={[
            "2nd Place — Runayay Cayetano Prototype Competition 2024",
            "Presented at CNIB 2025; proceedings publication scheduled",
            "Patent application filed in Peru (INDECOPI) — co-inventor (pending)"
          ]}
          images={[pulpiImg]}
          imageAlt="Pulpi device prototype"
        />
      </div>

      <SmallerProjects />
      
      <Publications />

      <footer className="py-8 bg-background border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2025 Nicole Doris Unsihuay Vila. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
