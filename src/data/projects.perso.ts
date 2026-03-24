import type { Project } from "@/data/projects.univ";

export const projectsPerso: Project[] = [
  {
    slug: "airl",
    title: "AirI — Prédiction de retards de vols",
    subtitle: "Tu entres un vol, l'app te dit si tu vas être retardé — et combien de temps.",
    description:
      "J'ai construit AirI de A à Z : carte interactive des aéroports canadiens, données de vol en temps réel, météo live et deux modèles ML (LightGBM + XGBoost) pour prédire si ton vol sera retardé et estimer la durée. Frontend Next.js, backend FastAPI, déployé sur Vercel + Railway.",
    tags: ["Next.js", "FastAPI", "Python", "LightGBM", "XGBoost", "TypeScript", "Tailwind"],
    year: "2025",
    impact: "Deux modèles ML : un pour savoir si ton vol sera retardé, un autre pour estimer de combien.",
    links: [
      { label: "Code", href: "https://github.com/GabrielFerreira41/AirI" },
      { label: "Démo", href: "https://gabrielferreiraairl.vercel.app/" },
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
    title: "Hackathon Mila — Guardrail IA & santé mentale",
    subtitle: "Système de détection de messages à haut risque pour un chatbot de soutien aux jeunes — F1 : 0.908.",
    description:
      "Dans ce hackathon Mila autour de Kids Help Phone (KHP), mon équipe et moi avons red-teamé leur chatbot, généré 6 037 conversations synthétiques bilingues et comparé trois architectures de guardrail. Solution finale : LLM-as-a-Judge (Cohere) avec seuil calibré à 0.36.",
    tags: ["AI Safety", "LLM", "NLP", "Guardrail", "Python", "Hackathon"],
    year: "2026",
    impact: "LLM-as-a-Judge → F1 : 0.908 sur 6 037 conversations bilingues (EN/FR/mix).",
    links: [{ label: "Rapport PDF", href: "/hackathon-mila-rapport.pdf" }],
  },
];