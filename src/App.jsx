import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Page Components
import Hero from "./pages/Hero";
import Memories from "./pages/Memories";
import Appreciation from "./pages/Appreciation";
import Tension from "./pages/Tension";
import Proposal from "./pages/Proposal";
import Acceptance from "./pages/Acceptance";
import Invite from "./pages/Invite";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Hero />
            </PageTransition>
          }
        />
        <Route
          path="/memories"
          element={
            <PageTransition>
              <Memories />
            </PageTransition>
          }
        />
        <Route
          path="/appreciation"
          element={
            <PageTransition>
              <Appreciation />
            </PageTransition>
          }
        />
        <Route
          path="/tension"
          element={
            <PageTransition>
              <Tension />
            </PageTransition>
          }
        />
        <Route
          path="/proposal"
          element={
            <PageTransition>
              <Proposal />
            </PageTransition>
          }
        />
        <Route
          path="/acceptance"
          element={
            <PageTransition>
              <Acceptance />
            </PageTransition>
          }
        />
        <Route
          path="/invite"
          element={
            <PageTransition>
              <Invite />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="grain-overlay" />
      <AnimatedRoutes />
    </Router>
  );
}
