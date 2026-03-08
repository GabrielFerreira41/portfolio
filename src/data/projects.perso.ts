import type { Project } from "@/data/projects.univ";

export const projectsPerso: Project[] = [
  {
    slug: "flight-delays-dashboard",
    title: "OpenSky — Flight Delays Dashboard",
    subtitle: "Analyse des retards + dashboard interactif (ETL → viz).",
    description:
      "Pipeline de données aviation : ingestion, nettoyage, features, visualisations et dashboard pour explorer retards par aéroport/compagnie/période.",
    tags: ["Data Viz", "Dashboard", "Python", "ETL"],
    year: "2026",
    impact: "Dashboard interactif + pipeline reproductible.",
    links: [
      { label: "Code", href: "https://github.com/..." },
      { label: "Demo", href: "https://..." },
    ],
  },
  {
    slug: "portfolio-react",
    title: "Portfolio (React / Next.js)",
    subtitle: "Site portfolio moderne : pages, projets, détails, design recruteur.",
    description:
      "Conception d’un site portfolio performant (SEO, pages dynamiques, composants réutilisables) prêt à accueillir une IA plus tard.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    year: "2026",
    impact: "Structure scalable + pages projets détaillées.",
    links: [{ label: "Code", href: "https://github.com/..." }],
  },
  {
    slug: "w2v-vs-llm-synonyms",
    title: "Synonyms Eval — Word2Vec vs LLM",
    subtitle: "Benchmark de synonymes : W2V vs LLM + évaluation WordNet.",
    description:
      "Pipeline d’évaluation de synonymes : génération (Word2Vec/LLM), scoring automatique et analyse qualitative.",
    tags: ["NLP", "Evaluation", "Word2Vec", "LLM"],
    year: "2025–2026",
    impact: "Comparaison structurée + métriques d’évaluation.",
    links: [{ label: "Code", href: "https://github.com/..." }],
  },
];