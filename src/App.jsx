import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Page Components
import Hero from "./pages/Hero";
import Memories from "./pages/Memories";
import Appreciation from "./pages/Appreciation";
import Tension from "./pages/Tension";
import Proposal from "./pages/Proposal";
import Acceptance from "./pages/Acceptance";
import Invite from "./pages/Invite";

// A small internal wrapper to access the location hook safely
function AppContent() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/appreciation" element={<Appreciation />} />
        <Route path="/tension" element={<Tension />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/acceptance" element={<Acceptance />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain-overlay" />
      <AppContent />
    </BrowserRouter>
  );
}
