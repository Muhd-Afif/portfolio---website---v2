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

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      <div className="App grain min-h-screen bg-[#050505] text-white antialiased">
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
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#121212",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: "2px",
            },
          }}
        />
      </div>
    </ReactLenis>
  );
}

export default App;
