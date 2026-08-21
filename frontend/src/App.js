import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Ribbon } from "@/components/Ribbon";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientBackground } from "@/components/AmbientBackground";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      <div className="App grain relative min-h-screen bg-[#050505] text-[#F5F7FA] antialiased">
        <AmbientBackground />
        <CustomCursor />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Ribbon />
            <SelectedWork />
            <Skills />
            <Education />
            <ResumeCTA />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0a1120",
              border: "1px solid rgba(37,99,255,0.25)",
              color: "#F5F7FA",
              borderRadius: "2px",
            },
          }}
        />
      </div>
    </ReactLenis>
  );
}

export default App;
