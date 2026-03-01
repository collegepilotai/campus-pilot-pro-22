import { FileText, Brain, MessageSquare, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "PDF to Flashcards",
    description: "Upload any PDF or paste notes — AI instantly creates study-ready flashcards.",
  },
  {
    icon: Brain,
    title: "AI Quiz Generator",
    description: "Auto-generate multiple-choice quizzes from your material with explanations.",
  },
  {
    icon: MessageSquare,
    title: "Chat with Notes",
    description: "Ask questions about your documents and get instant, accurate answers.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracker",
    description: "Monitor your study sessions, quiz scores, and mastery over time.",
  },
];

const Features = () => (
  <section id="features" className="py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Everything you need to <span className="gradient-text">study smarter</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Powerful AI tools designed specifically for college students.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 transition-all hover:border-primary/40 hover:shadow-lg group"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
