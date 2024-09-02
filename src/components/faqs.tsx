import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./accordion";
import { title } from 'process';

type faq ={
    id: string;
    title: string;
    content: string[];
} 

const faqList: faq[]= [
   { id: '1',
    title: "Who can use Ballocs?",
    content: [ "A Tech enthusiast looking to collaborate on projects", "Developers contributing to open source projects", "Freelancers looking to work and as part of a team", "Educational institutes looking for collaborative learning", "Startups looking to manage multiple projects, teams and outsource projects "]
}
]

export const Faqs = () => {
  return (
    <section id="faq">
    <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-lg sm:text-center">
        <h2 className="text-xl font-bold text-primary sm:text-4xl">
          FAQ’s
        </h2>

        <p className="mt-4 text-sm">
          Get Instant answers for the most common questions about Ballocs
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-4xl space-y-4">
        <Accordion type="single" collapsible>
          {faqList.map((faq) => (
            <AccordionItem
              key={`item-${faq.id}`}
              value={`item-${faq.id}`}
              className="border-b-0"
            >
              <AccordionTrigger className="text-left font-semibold text-primary sm:text-center sm:text-lg">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="rounded-xl bg-secondary p-4">
                {faq.content.map(
                    (c, index) =>( <p key={c} className='mt-2 font-semibold'>{`${index+1}. ${c}`}</p>)
                )}

                
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
  )
}

export default Faqs