import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen | La Rosel Tattoo Atelier',
  description:
    'Lesen Sie unsere Allgemeinen Geschäftsbedingungen für Tätowierungen und Dienstleistungen bei La Rosel Tattoo Atelier.',
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Allgemeine Geschäftsbedingungen (AGB) für La Rosel Tattoo Atelier
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen und Tätigkeiten,
            die von La Rosel Tattoo Atelier (im Folgenden "Studio") erbracht werden. Mit der
            Terminvereinbarung erkennt der Kunde diese AGB an.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Terminvereinbarung und Anzahlung</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Termine werden ausschließlich nach vorheriger Absprache und gegen eine Anzahlung
              verbindlich reserviert. Die Höhe der Anzahlung wird individuell vereinbart und ist
              abhängig vom geplanten Aufwand der Tätowierung.
            </li>
            <li>
              Die Anzahlung dient zur Sicherung des Termins und wird mit dem Endpreis der
              Tätowierung verrechnet.
            </li>
            <li>
              Rückerstattung der Anzahlung: Anzahlungen werden grundsätzlich nicht in bar
              zurückerstattet. Sollte der Termin abgesagt oder verschoben werden, wird die Anzahlung
              in Form eines Gutscheins ausgestellt, der innerhalb von 12 Monaten im Studio eingelöst
              werden kann.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Absage oder Verschiebung von Terminen</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Eine Absage oder Verschiebung des Termins durch den Kunden muss mindestens 48 Stunden
              vor dem vereinbarten Termin erfolgen.
            </li>
            <li>
              Bei einer Absage oder Verschiebung innerhalb von weniger als 48 Stunden vor dem Termin
              behält sich das Studio das Recht vor, die Anzahlung einzubehalten. In diesem Fall
              erfolgt keine Erstattung, auch nicht in Form eines Gutscheins.
            </li>
            <li>
              Das Studio behält sich das Recht vor, Termine aus wichtigen Gründen (z. B. Krankheit,
              technische Probleme) zu verschieben. In diesem Fall wird der Kunde schnellstmöglich
              informiert, und ein Ersatztermin wird vereinbart.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Verantwortung des Kunden bei Text und Motiven
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Der Kunde ist verpflichtet, sämtliche Entwürfe, insbesondere Texte und Schriftzüge,
              vor Beginn der Tätowierung sorgfältig zu prüfen.
            </li>
            <li>
              Das Studio übernimmt keine Haftung für Rechtschreibfehler oder inhaltliche Fehler, die
              im Entwurf übersehen wurden. Es liegt in der alleinigen Verantwortung des Kunden, die
              Richtigkeit des Textes zu gewährleisten.
            </li>
            <li>
              Bitte beachten Sie, dass die Tätowierer des Studios möglicherweise eine andere
              Muttersprache haben und daher nicht in der Lage sind, Rechtschreibung oder Grammatik
              in allen Sprachen vollständig zu überprüfen. Kunden sollten daher besonders sorgfältig
              auf die korrekte Schreibweise achten.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Haftungsausschluss und Gesundheit</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Der Kunde ist verpflichtet, das Studio vorab über gesundheitliche Einschränkungen,
              Allergien, Hautkrankheiten oder andere relevante Umstände zu informieren, die die
              Tätowierung beeinträchtigen könnten.
            </li>
            <li>
              Das Studio haftet nicht für Komplikationen, die auf eine unzureichende Aufklärung des
              Kunden über gesundheitliche Einschränkungen zurückzuführen sind.
            </li>
            <li>
              Nach der Tätowierung erhält der Kunde detaillierte Pflegehinweise. Für Schäden am
              Tattoo, die durch unsachgemäße Nachsorge entstehen, übernimmt das Studio keine
              Haftung.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Minderjährige und Begleitpersonen</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Tätowierungen werden ausschließlich an Personen ab 18 Jahren durchgeführt. Ein
              Altersnachweis ist erforderlich.
            </li>
            <li>
              Minderjährige Begleitpersonen dürfen das Studio nur in Begleitung eines Erwachsenen
              betreten.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Urheberrecht und Nutzung</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Die im Studio erstellten Entwürfe und Tätowierungen sind urheberrechtlich geschützt.
              Sie dürfen ohne Zustimmung des Studios weder vervielfältigt noch anderweitig verwendet
              werden.
            </li>
            <li>
              Das Studio behält sich das Recht vor, Bilder von fertiggestellten Tätowierungen für
              Portfolio-Zwecke (z. B. Social Media, Webseite) zu nutzen, sofern der Kunde nicht
              ausdrücklich widerspricht.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Preise und Bezahlung</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Die Preise für Tätowierungen richten sich nach dem Aufwand, der Größe und dem Motiv.
            </li>
            <li>
              Die Bezahlung erfolgt nach Abschluss der Tätowierung in bar oder per EC-Karte.
              Gutscheine können ebenfalls eingelöst werden.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Salvatorische Klausel</h2>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
            Wirksamkeit der übrigen Bestimmungen davon unberührt. Die unwirksame Bestimmung wird
            durch eine Regelung ersetzt, die dem Zweck der ursprünglichen Bestimmung am nächsten
            kommt.
          </p>
        </section>

        <footer className="mt-12 text-sm text-muted-foreground">
          <p>Stand: 01.01.2025</p>
          <p>La Rosel Tattoo Atelier</p>
        </footer>
      </div>
    </div>
  );
}
