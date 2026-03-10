import type { Project } from "@/data/projects.univ";

export const projectsPerso: Project[] = [
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
    slug: "apprentissage-looker-studio",
    title: "Apprentissage Looker Studio",
    subtitle: "Dashboards interactifs (data viz & storytelling) sur un dataset F1 (Kaggle).",
    description:
      "Exploration de Looker Studio à partir d’un dataset F1 récupéré sur Kaggle : connexion de sources, modélisation légère, création de charts, filtres et interactions, puis travail du design (layout, typographie, couleurs) pour produire des tableaux de bord clairs orientés décision.",
    tags: ["Looker Studio", "Data Viz", "Dashboard", "Storytelling"],
    year: "2026",
    impact: "Dashboard F1 lisible et pro : filtres, interactions, pages thématiques et storytelling.",
    links: [{ label: "Démo", href: "https://" }],
  },
  {
    slug: "hackathon-mila-sante-mentale",
    title: "Hackathon Mila — IA & santé mentale",
    subtitle: "Prototype d’IA conversationnelle plus sûre pour la santé mentale des jeunes.",
    description:
      "Participation au hackathon Mila : cadrage du problème, prototypage, itérations rapides et travail en équipe multidisciplinaire.",
    tags: ["Hackathon", "Mila", "AI Safety", "NLP", "Prototype"],
    year: "2026",
    impact: "Prototype + apprentissages sur sécurité/fiabilité, UX et collaboration.",
    links: [{ label: "Résumé", href: "#" }],
  },
];