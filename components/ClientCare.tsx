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
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Kunden-Pflege</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Vielen Dank, dass du dich für ein Tattoo bei uns entschieden hast! Hier sind aktualisierte
          Pflegehinweise mit zusätzlichem Fokus auf Wasserdesinfektion, um sicherzustellen, dass
          dein Tattoo hygienisch und sicher heilt.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-none border-secondary">
            <CardHeader>
              <CardTitle>Unsere Hygienestandards</CardTitle>
              <CardDescription>Wir priorisieren deine Sicherheit über alles</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Alle Geräte werden mit Autoklaven in Krankenhausqualität sterilisiert</li>
                <li>
                  Einwegnadeln und Tintenkappen werden immer verwendet und nach jeder Sitzung
                  entsorgt
                </li>
                <li>
                  Unsere Künstler tragen für jeden Eingriff frische Handschuhe und Schutzausrüstung
                </li>
                <li>
                  Arbeitsstationen werden zwischen den Kunden gründlich gereinigt und desinfiziert
                </li>
                <li>Wir halten im gesamten Studio eine saubere, organisierte Umgebung aufrecht</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-none border-secondary">
            <CardHeader>
              <CardTitle>Grundlegende Nachsorge</CardTitle>
              <CardDescription>Befolge diese Schritte für eine optimale Heilung</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-secondary">
                  <AccordionTrigger>Direkt nach dem Tätowieren</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Schutzfolie für 2-4 Stunden auf der Haut lassen</li>
                      <li>Hände gründlich waschen vor dem ersten Reinigen</li>
                      <li>
                        Tattoo mit lauwarmem Wasser und pH-neutraler, unparfümierter Seife reinigen
                      </li>
                      <li>Nur sauberes, keimfreies Wasser verwenden</li>
                      <li>Haut vorsichtig trocken tupfen</li>
                      <li>Tattoo 10-15 Minuten an der Luft trocknen lassen</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-secondary">
                  <AccordionTrigger>In den ersten Tagen (Tag 1-3)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Tattoo 2-3 Mal täglich reinigen</li>
                      <li>
                        Bei unsicherer Wasserqualität steriles Wasser oder Desinfektionslösung
                        verwenden
                      </li>
                      <li>Dünne Schicht empfohlener Tattoo-Pflegecreme auftragen</li>
                      <li>Kontakt mit schmutzigen Oberflächen vermeiden</li>
                      <li>Weiche, lockere Kleidung tragen</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-secondary">
                  <AccordionTrigger>In der Heilungsphase (Tag 4-14)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Nicht an Kruste oder Schorf kratzen</li>
                      <li>Bei Juckreiz geduldig bleiben und nicht kratzen</li>
                      <li>Weiterhin 2-3 Mal täglich Pflegecreme auftragen</li>
                      <li>Bei unsicherer Wasserqualität keimfreies Wasser verwenden</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-secondary">
                  <AccordionTrigger>Was du vermeiden solltest</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Direkte Sonneneinstrahlung für 4-6 Wochen</li>
                      <li>Schwimmen und Baden für 4 Wochen</li>
                      <li>Sport und starkes Schwitzen für 7-10 Tage</li>
                      <li>Mechanische Reibung auf dem Tattoo</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-secondary">
                  <AccordionTrigger>Langfristige Pflege</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Feuchtigkeitscremes bei Bedarf verwenden</li>
                      <li>Tattoo immer mit Sonnencreme (SPF 50) schützen</li>
                      <li>Tattoo sauber halten und Verletzungen vermeiden</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 border border-secondary">
          <h3 className="text-xl font-semibold mb-2">Warnsignale</h3>
          <p className="mb-4">Wann solltest du einen Arzt oder Tätowierer kontaktieren?</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Starke Rötung oder Schwellung, die nach ein paar Tagen nicht abnimmt</li>
            <li>Eiterbildung oder unangenehmer Geruch</li>
            <li>Anhaltender Schmerz oder ungewöhnlich starke Reizung</li>
            <li>Fieber oder andere Symptome einer Infektion</li>
          </ul>
        </div>

        <p className="mt-8 text-center text-lg">
          Falls du Fragen hast, stehen wir dir jederzeit zur Verfügung. Pflege dein Tattoo gut – es
          ist ein Kunstwerk fürs Leben!
        </p>
        <p className="mt-4 text-center font-semibold">Dein Team von La Rosel Tattoo Atelier</p>
      </div>
    </section>
  );
}
