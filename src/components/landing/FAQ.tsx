import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What file types does Campus Pilot support?",
    a: "We support PDF files and YouTube video URLs. Just upload or paste and we'll extract the content automatically.",
  },
  {
    q: "How accurate are the AI-generated flashcards and quizzes?",
    a: "Our AI is powered by GPT-4 and tuned for academic content. Most students report 90%+ accuracy, and you can always edit any card or question.",
  },
  {
    q: "Can I use Campus Pilot on my phone?",
    a: "Absolutely! Campus Pilot is fully responsive and works great on mobile, tablet, and desktop.",
  },
  {
    q: "Is there a limit on the free plan?",
    a: "The free plan includes 5 documents per month, basic flashcards, and 5 quizzes. Upgrade to Pro for unlimited everything.",
  },
  {
    q: "Can I cancel my Pro subscription anytime?",
    a: "Yes! You can cancel anytime from your account settings. No questions asked, no hidden fees.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container">
      <h2 className="mx-auto max-w-xl text-center font-heading text-3xl font-bold sm:text-4xl mb-12">
        Frequently asked <span className="gradient-text">questions</span>
      </h2>
      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border-border/50 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
