import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do you estimate costs for a project?",
    a: "We start with a discovery phase to understand your requirements. For well-defined scopes, we offer fixed-price contracts. For evolving projects, we recommend a Time & Materials model, giving you flexibility to change priorities.",
  },
  {
    q: "Will I own the source code?",
    a: "Absolutely. Upon full payment, 100% of the Intellectual Property (IP) rights and source code are transferred to you. We have no vendor lock-in policies.",
  },
  {
    q: "How do you handle communication and updates?",
    a: "We use Slack/Teams for daily communication and Jira/Trello for task management. You'll receive weekly sprint reports and have access to a staging environment to view progress in real-time.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we offer flexible maintenance packages. This includes server monitoring, bug fixes, security updates, and minor feature enhancements to keep your software running smoothly.",
  },
  {
    q: "Can you take over an existing code base?",
    a: "Yes. We perform a comprehensive code audit first to assess quality, security, and scalability. We then provide a report on whether to refactor, rewrite, or build upon the existing code.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
