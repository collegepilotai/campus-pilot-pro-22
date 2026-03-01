import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    university: "Stanford University",
    quote: "Campus Pilot turned my 50-page biology notes into perfect flashcards in seconds. My GPA went up a full point!",
  },
  {
    name: "Marcus Johnson",
    university: "UCLA",
    quote: "The AI quiz generator is insane. It finds exactly the tricky questions professors ask. Total game-changer.",
  },
  {
    name: "Priya Patel",
    university: "MIT",
    quote: "I chat with my lecture notes at 2am before exams. It's like having a tutor available 24/7.",
  },
];

const Testimonials = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container">
      <h2 className="mx-auto max-w-xl text-center font-heading text-3xl font-bold sm:text-4xl">
        Loved by <span className="gradient-text">students</span> everywhere
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 border-t border-border/50 pt-4">
              <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.university}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
