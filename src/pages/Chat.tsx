import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hi! I've read your document \"Organic Chemistry Ch. 5\". Ask me anything about it!",
  },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    // Simulated AI response
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Based on your document, the key concept here relates to molecular bonding and how electron pairs are shared between atoms. The chapter specifically discusses covalent bonds in organic molecules, where carbon atoms form four bonds due to their electron configuration.",
        },
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-2xl pt-24 pb-4 flex flex-col">
        <div className="mb-4">
          <h1 className="font-heading text-2xl font-bold text-foreground">Chat with Notes</h1>
          <p className="text-sm text-muted-foreground">Organic Chemistry Ch. 5</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
            >
              {msg.role === "assistant" && (
                <div className="shrink-0 mt-1 rounded-lg bg-primary/10 p-2 h-fit">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-xl px-4 py-3 text-sm ${
                  msg.role === "user"
                    ? "gradient-bg text-primary-foreground"
                    : "glass-card text-foreground"
                }`}
              >
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="shrink-0 mt-1 rounded-lg bg-secondary p-2 h-fit">
                  <User className="h-4 w-4 text-foreground" />
                </div>
              )}
            </motion.div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="shrink-0 mt-1 rounded-lg bg-primary/10 p-2 h-fit">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="glass-card rounded-xl px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-3 pb-4">
          <Input
            placeholder="Ask a question about your notes..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            className="border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground"
          />
          <Button
            onClick={send}
            disabled={!input.trim() || loading}
            className="gradient-bg border-0 text-primary-foreground hover:opacity-90 px-4"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Chat;
