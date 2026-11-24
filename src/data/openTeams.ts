/**
 * Open teams presented on /mitmachen.
 * (Team members live elsewhere; this file describes the teams themselves.)
 */
export interface OpenTeam {
  id: string
  category: 'intern' | 'extern'
  /** Official team name, also used for the logo file name in /public/team-logos. */
  team: string
  /** Short role title. */
  title: string
  /** Paragraphs are separated by blank lines. */
  description: string
}

/** Team id → name without the "IGNITE" prefix, for the members area, where the club goes without saying. */
export const teamNames = (teams: readonly OpenTeam[]): Record<string, string> =>
  Object.fromEntries(teams.map(({ id, team }) => [id, team.replace(/^IGNITE /, '')]))

export const openTeams: readonly OpenTeam[] = [
  {
    id: 'ignite-relations',
    category: 'extern',
    team: 'IGNITE Relations & Cooperations',
    title: 'Relations Team',
    description:
      'Wir bringen IGNITE mit der Startup- und Unternehmenswelt zusammen. Unser Team baut Partnerschaften mit Startups, Unternehmen und Gründungsinitiativen auf, stärkt unser Alumni-Netzwerk und schafft neue Möglichkeiten für Austausch und Zusammenarbeit.\n\nOb Startup-Visits, gemeinsame Projekte oder innovative Kooperationsformate: Wir bringen unsere Mitglieder mit Gründern und Unternehmen in Kontakt, ermöglichen praxisnahe Einblicke und schaffen Raum, um eigene Ideen einzubringen.\n\nUnser Ziel sind langfristige Partnerschaften, aus denen konkrete Projekte, wertvolle Kontakte und neue Möglichkeiten für unsere Mitglieder und Partner entstehen.',
  },
  {
    id: 'ignite-marketing',
    category: 'extern',
    team: 'IGNITE Marketing',
    title: 'Marketing Team',
    description:
      'Wir sind das Marketing-Team von IGNITE. Du willst Spaß, Kreativität und dein Flair für Social Media vereinen? Dann bist du bei uns richtig. Von TikTok bis zur Eventdokumentation kümmern wir uns um alles rund um die Repräsentation von IGNITE.\n\nUnser Team besteht aus sieben engagierten Mitgliedern mit unterschiedlichen internen Aufgaben. Bei unseren Weeklys helfen wir einander, planen gemeinsam Content und brainstormen zusammen.\n\nDas Tolle daran: Niemand gibt dir etwas vor – deine Kreativität ist die einzige Grenze.',
  },
  {
    id: 'ignite-hr',
    category: 'intern',
    team: 'IGNITE Human Resources',
    title: 'People Team',
    description:
      'Hey, wir sind Freya und Emma, das HR-Team von IGNITE! Wir studieren beide IBAE im 5. Semester und nebenbei Psychologie. Bei IGNITE sind wir von Anfang an dabei.\n\nZu unseren Hauptaufgaben zählen Bewerbungsgespräche. Wenn du dich bei uns bewirbst, sind wir deine ersten Ansprechpartnerinnen: Wir begleiten dich durch den Bewerbungsprozess und freuen uns, neue potenzielle Mitglieder kennenzulernen.\n\nUns liegt am Herzen, dass sich alle im Team wohlfühlen. Deshalb organisieren wir gemeinsam mit Marie regelmäßig Teambuilding-Events und haben jederzeit ein offenes Ohr für eure Anliegen.\n\nGanz viel Liebe, HR <3',
  },
  {
    id: 'ignite-finance-legal',
    category: 'intern',
    team: 'IGNITE Finance & Legal',
    title: 'Finance & Legal Team',
    description:
      'Wir, Cornelis und Jasmin, sind das Finance- & Legal-Team von IGNITE. Cornelis übernimmt Finance, Jasmin kümmert sich um Legal.\n\nCornelis – Finance: Er ist 22, studiert IBAE an der Leuphana mit Minor Digital Business und hat bereits unternehmerische Erfahrung gesammelt: Sein erstes Venture wurde erfolgreich verkauft. Jetzt freut er sich darauf, weiterhin Verantwortung im Bereich Finance zu übernehmen.\n\nJasmin – Legal: Sie ist 19, studiert IBAE an der Leuphana mit Minor Wirtschaftsrecht und fasziniert sich für das Zusammenspiel aus Finance und Legal. Bei IGNITE freut sie sich besonders darauf, die Vereinsgründung aktiv mitzugestalten und ihr Wissen in Legal und Finance kontinuierlich zu verbessern.\n\nFinance kümmert sich um die operativen finanziellen Prozesse und Abläufe rund um IGNITE – von der Planung bis zur Abrechnung. Dazu gehört auch Sponsoring: Wir holen die Partner an Bord, die unsere Projekte möglich machen. Legal befasst sich aktuell mit der Vereinsgründung und allen rechtlichen Fragen für IGNITE 2027 – Verträgen, Satzung und mehr.\n\nOhne Finance kein Event: Jedes Projekt steht und fällt mit finanzieller Klarheit. Wir bauen gerade ein komplett neues Team auf und freuen uns darauf, gemeinsam Verantwortung zu übernehmen. Dabei lernst du viel über Teamführung, Projektmanagement, Buchhaltung und Excel und behältst den finanziellen Durchblick, der für jedes Startup wichtig ist. Du kannst viel mitgestalten: offene Kommunikation, viel Austausch und Freiheit, Ideen gemeinsam umzusetzen. Wer Lust hat mitzugestalten, ist herzlich willkommen.',
  },
  {
    id: 'ignite-infrastructure',
    category: 'intern',
    team: 'IGNITE Infrastructure',
    title: 'Process & Tools Team',
    description:
      'Wir kümmern uns darum, dass alles einwandfrei funktioniert. Unsere Aufgaben reichen von der Technik fürs Weekly über die Organisation der Kommunikationskanäle bis zur Weiterentwicklung der Website.\n\nBei uns tüfteln wir immer wieder neue Ideen für noch bessere und reibungslosere Abläufe aus, damit sich andere auf ihre Planung konzentrieren können.',
  },
]
