import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => (
  <section className="relative overflow-hidden pt-32 pb-20 hero-glow">
    <div className="container relative z-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            🚀 Trusted by 10,000+ students
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Ace Every Exam{" "}
            <span className="gradient-text">with AI</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Turn your notes and PDFs into flashcards, quizzes, and an AI study
            buddy — in seconds. Study smarter, not harder.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="gradient-bg border-0 text-primary-foreground hover:opacity-90 gap-2"
            >
              <Link to="/signup">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
            >
              <Play className="h-4 w-4" /> See How It Works
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden glow-border">
            <img
              src={heroImage}
              alt="Campus Pilot AI study platform dashboard"
              className="w-full rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
