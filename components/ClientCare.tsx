import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ClientCare() {
  return (
    <section className="py-16 bg-background w-full" id="client-care">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Client Care</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          At our studio, your safety and satisfaction are our top priorities. We maintain the
          highest standards of hygiene and provide comprehensive aftercare guidance to ensure the
          best results for your tattoo.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-none border-secondary">
            <CardHeader>
              <CardTitle>Our Hygiene Standards</CardTitle>
              <CardDescription>We prioritize your safety above all else</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>All equipment is sterilized using hospital-grade autoclaves</li>
                <li>
                  Single-use needles and ink caps are always used and disposed of after each session
                </li>
                <li>Our artists wear fresh gloves and protective gear for every procedure</li>
                <li>Workstations are thoroughly cleaned and disinfected between clients</li>
                <li>We maintain a clean, organized environment throughout the studio</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-none border-secondary">
            <CardHeader>
              <CardTitle>Basic Aftercare</CardTitle>
              <CardDescription>Follow these steps for optimal healing</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-secondary">
                  <AccordionTrigger>First 24 Hours</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Leave the bandage on for the recommended time (usually 2-4 hours)</li>
                      <li>Gently wash the tattoo with unscented soap and lukewarm water</li>
                      <li>Pat dry with a clean, soft towel</li>
                      <li>Apply a thin layer of recommended aftercare ointment</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-secondary">
                  <AccordionTrigger>Days 2-14</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Wash the tattoo gently twice a day</li>
                      <li>Apply a thin layer of aftercare product as directed</li>
                      <li>Avoid direct sunlight, swimming, and soaking in water</li>
                      <li>Wear loose, breathable clothing over the tattoo</li>
                      <li>Do not pick or scratch at scabs or peeling skin</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-secondary">
                  <AccordionTrigger>Long-term Care</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Always use sunscreen on your tattoo when exposed to sunlight</li>
                      <li>Keep your tattoo moisturized to maintain its vibrancy</li>
                      <li>Avoid tanning beds and excessive sun exposure</li>
                      <li>Touch-ups may be needed over time to keep your tattoo looking fresh</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
