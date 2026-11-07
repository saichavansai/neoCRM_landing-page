import { useCallback, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Demo from "./components/Demo";
import Capabilities from "./components/Capabilities";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import BuyModal from "./components/BuyModal";

export default function App() {
  const [buyOpen, setBuyOpen] = useState(false);
  const openBuy = () => setBuyOpen(true);
  const closeBuy = useCallback(() => setBuyOpen(false), []);

  return (
    <MotionConfig reducedMotion="user">
      <Backdrop />
      <Navbar onBuy={openBuy} />
      <main>
        <Hero onBuy={openBuy} />
        <Demo />
        <Showcase />
        <Capabilities />
        <Pricing onBuy={openBuy} />
      </main>
      <Footer />
      {buyOpen && <BuyModal onClose={closeBuy} />}
    </MotionConfig>
  );
}
