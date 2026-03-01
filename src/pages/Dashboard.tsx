import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import {
  FileText,
  Brain,
  Upload,
  BarChart3,
  Plus,
  Clock,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Documents", value: "12", icon: FileText },
  { label: "Flashcards", value: "148", icon: Brain },
  { label: "Quizzes Taken", value: "8", icon: BarChart3 },
  { label: "Study Hours", value: "24", icon: Clock },
];

const recentDocs = [
  { name: "Organic Chemistry Ch. 5", date: "2 hours ago", cards: 15 },
  { name: "US History - Civil War", date: "Yesterday", cards: 22 },
  { name: "Calculus II Notes", date: "3 days ago", cards: 18 },
  { name: "Psychology 101 Midterm", date: "1 week ago", cards: 30 },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container pt-24 pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, let's study!</p>
        </div>
        <Button asChild className="gradient-bg border-0 text-primary-foreground hover:opacity-90 gap-2">
          <Link to="/upload">
            <Plus className="h-4 w-4" /> Upload
          </Link>
        </Button>
      </div>

      {/* Upgrade banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 glass-card glow-border p-5 flex items-center justify-between flex-wrap gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="gradient-bg rounded-lg p-2">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="font-heading font-semibold text-foreground text-sm">Upgrade to Pro</p>
            <p className="text-xs text-muted-foreground">Unlock unlimited documents, quizzes & chat</p>
          </div>
        </div>
        <Button size="sm" asChild className="gradient-bg border-0 text-primary-foreground hover:opacity-90">
          <Link to="/pricing">Upgrade — $5/mo</Link>
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <s.icon className="h-4 w-4 text-primary" />
            </div>
            <p className="mt-2 font-heading text-3xl font-bold text-foreground">{s.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        {[
          { label: "New Flashcards", icon: Brain, to: "/upload" },
          { label: "Take a Quiz", icon: BarChart3, to: "/quiz" },
          { label: "Chat with Notes", icon: Upload, to: "/chat" },
        ].map((a) => (
          <Link key={a.label} to={a.to}>
            <div className="glass-card p-5 flex items-center gap-3 transition-all hover:border-primary/40 cursor-pointer">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <a.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-heading font-medium text-foreground text-sm">{a.label}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent documents */}
      <div className="glass-card">
        <div className="p-5 border-b border-border/50">
          <h2 className="font-heading font-semibold text-foreground">Recent Documents</h2>
        </div>
        <div className="divide-y divide-border/50">
          {recentDocs.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center justify-between p-5 hover:bg-secondary/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.date}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{doc.cards} cards</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
