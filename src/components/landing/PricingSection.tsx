import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Simple, student-friendly <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Start free, upgrade when you're ready.</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border/50 bg-secondary/50 p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                !yearly ? "gradient-bg text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                yearly ? "gradient-bg text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly <span className="text-xs opacity-75">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground">Free</h3>
            <div className="mt-4">
              <span className="font-heading text-4xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              {["5 documents/month", "Basic flashcards", "5 quizzes/month", "Limited chat"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> {item}
                  </li>
                )
              )}
            </ul>
            <Button
              variant="outline"
              className="mt-8 w-full border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
              asChild
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card glow-border p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 gradient-bg px-3 py-1 text-xs font-semibold text-primary-foreground rounded-bl-lg">
              Popular
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">Pro</h3>
            <div className="mt-4">
              <span className="font-heading text-4xl font-bold text-foreground">
                ${yearly ? "50" : "5"}
              </span>
              <span className="text-muted-foreground">/{yearly ? "year" : "month"}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Unlimited documents",
                "Advanced AI flashcards",
                "Unlimited quizzes",
                "Unlimited chat",
                "Progress analytics",
                "Priority support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Button
              className="mt-8 w-full gradient-bg border-0 text-primary-foreground hover:opacity-90"
              asChild
            >
              <Link to="/signup">Upgrade to Pro</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
