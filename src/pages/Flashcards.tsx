import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const sampleCards = [
  { front: "What is the mitochondria?", back: "The powerhouse of the cell — it generates ATP through cellular respiration." },
  { front: "Define photosynthesis", back: "The process by which plants convert light energy, CO₂, and water into glucose and oxygen." },
  { front: "What is the Krebs Cycle?", back: "A series of chemical reactions in the mitochondrial matrix that generates electron carriers for the ETC." },
  { front: "Define osmosis", back: "The movement of water across a semipermeable membrane from low to high solute concentration." },
  { front: "What is DNA replication?", back: "The process by which a DNA molecule makes a copy of itself before cell division." },
];

const Flashcards = () => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = sampleCards[current];

  const next = () => {
    setFlipped(false);
    setCurrent((c) => Math.min(c + 1, sampleCards.length - 1));
  };
  const prev = () => {
    setFlipped(false);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-2xl pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Flashcards</h1>
            <p className="text-muted-foreground text-sm mt-1">Organic Chemistry Ch. 5</p>
          </div>
          <span className="text-sm text-muted-foreground">
            {current + 1} / {sampleCards.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-muted mb-8">
          <div
            className="h-full rounded-full gradient-bg transition-all duration-300"
            style={{ width: `${((current + 1) / sampleCards.length) * 100}%` }}
          />
        </div>

        {/* Card */}
        <div
          className="perspective-1000 cursor-pointer mb-8"
          onClick={() => setFlipped(!flipped)}
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front */}
            <div
              className="glass-card p-12 min-h-[280px] flex flex-col items-center justify-center text-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="text-xs text-primary font-medium mb-4">QUESTION</p>
              <p className="font-heading text-xl font-semibold text-foreground">{card.front}</p>
              <p className="mt-6 text-xs text-muted-foreground">Click to flip</p>
            </div>

            {/* Back */}
            <div
              className="glass-card glow-border p-12 min-h-[280px] flex flex-col items-center justify-center text-center absolute inset-0"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <p className="text-xs text-primary font-medium mb-4">ANSWER</p>
              <p className="text-foreground leading-relaxed">{card.back}</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={prev}
            disabled={current === 0}
            className="border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setCurrent(0);
              setFlipped(false);
            }}
            className="border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={next}
            disabled={current === sampleCards.length - 1}
            className="border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Flashcards;
