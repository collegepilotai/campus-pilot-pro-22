import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { CheckCircle2, XCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "What is the primary function of mitochondria?",
    options: ["Protein synthesis", "ATP production", "DNA replication", "Cell division"],
    correct: 1,
    explanation: "Mitochondria are the powerhouses of the cell, generating ATP through oxidative phosphorylation.",
  },
  {
    question: "Which molecule carries genetic information?",
    options: ["RNA", "ATP", "DNA", "Protein"],
    correct: 2,
    explanation: "DNA (deoxyribonucleic acid) carries the genetic blueprint of an organism.",
  },
  {
    question: "What is the process of converting glucose to pyruvate called?",
    options: ["Krebs cycle", "Glycolysis", "Fermentation", "Photosynthesis"],
    correct: 1,
    explanation: "Glycolysis is the metabolic pathway that converts glucose into pyruvate.",
  },
  {
    question: "Which organelle is responsible for protein synthesis?",
    options: ["Golgi apparatus", "Lysosome", "Ribosome", "Nucleus"],
    correct: 2,
    explanation: "Ribosomes are the molecular machines that translate mRNA into polypeptide chains.",
  },
  {
    question: "What type of bond holds water molecules together?",
    options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
    correct: 2,
    explanation: "Hydrogen bonds form between the partially positive hydrogen and partially negative oxygen of adjacent water molecules.",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const q = questions[current];

  useEffect(() => {
    if (finished || answered) return;
    if (timeLeft <= 0) {
      setAnswered(true);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, finished, answered]);

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current >= questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
    setAnswered(false);
    setTimeLeft(30);
  };

  if (finished) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container max-w-lg pt-24 pb-12 text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card p-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Quiz Complete!</h2>
            <p className="text-6xl font-heading font-bold gradient-text my-6">
              {score}/{questions.length}
            </p>
            <p className="text-muted-foreground mb-6">
              {score === questions.length ? "Perfect score! 🎉" : score >= 3 ? "Great job! 💪" : "Keep studying! 📚"}
            </p>
            <Button
              onClick={() => {
                setCurrent(0);
                setSelected(null);
                setAnswered(false);
                setFinished(false);
                setScore(0);
                setTimeLeft(30);
              }}
              className="gradient-bg border-0 text-primary-foreground hover:opacity-90"
            >
              Retake Quiz
            </Button>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-2xl pt-24 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading text-2xl font-bold text-foreground">Quiz</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className={timeLeft <= 5 ? "text-destructive font-semibold" : ""}>{timeLeft}s</span>
          </div>
        </div>

        {/* Progress */}
        <div className="h-1.5 rounded-full bg-muted mb-8">
          <div
            className="h-full rounded-full gradient-bg transition-all duration-300"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <p className="text-xs text-muted-foreground mb-3">
          Question {current + 1} of {questions.length}
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground mb-6">{q.question}</h2>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            let classes = "glass-card p-4 cursor-pointer transition-all text-left w-full ";
            if (answered) {
              if (i === q.correct) classes += "border-success/60 bg-success/10 ";
              else if (i === selected) classes += "border-destructive/60 bg-destructive/10 ";
            } else {
              classes += "hover:border-primary/40 ";
            }

            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={classes}
                onClick={() => handleSelect(i)}
                disabled={answered}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-semibold text-foreground">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm text-foreground">{opt}</span>
                  {answered && i === q.correct && <CheckCircle2 className="ml-auto h-5 w-5 text-success" />}
                  {answered && i === selected && i !== q.correct && <XCircle className="ml-auto h-5 w-5 text-destructive" />}
                </div>
              </motion.button>
            );
          })}
        </div>

        {answered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
            <div className="glass-card p-4 mb-4">
              <p className="text-xs text-primary font-medium mb-1">Explanation</p>
              <p className="text-sm text-muted-foreground">{q.explanation}</p>
            </div>
            <Button onClick={handleNext} className="w-full gradient-bg border-0 text-primary-foreground hover:opacity-90">
              {current >= questions.length - 1 ? "See Results" : "Next Question"}
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Quiz;
