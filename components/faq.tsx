"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long do FoldRack models last?",
    answer:
      "Our featured racks are built with premium materials designed to last 5-10 years with proper care. Many come with warranties ranging from 1 year to lifetime coverage.",
  },
  {
    question: "Are they rust-proof?",
    answer:
      "Most models feature rust-resistant coatings or stainless steel construction. We specifically highlight rust-proof options in each product description.",
  },
  {
    question: "Do they come assembled?",
    answer:
      "Most racks require minimal assembly—typically just unfolding and locking into place. Detailed instructions are included with each product.",
  },
  {
    question: "What's the weight capacity?",
    answer:
      "Capacity varies by model, ranging from 35 lbs for compact designs to 65+ lbs for heavy-duty options. Check individual product specs for details.",
  },
]

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4 text-balance">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border rounded-lg px-6 data-[state=open]:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left font-bold text-graphite hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
