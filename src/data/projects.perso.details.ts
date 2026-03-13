import type { TechItem } from "@/components/techCluster";

export type PersoProjectDetail = {
  tl_dr: string;
  sections: { title: string; bullets: string[] }[];
  devStack: TechItem[];
  mlStack: TechItem[];
  deployStack: TechItem[];
};

export const projectsPersoDetails: Record<string, PersoProjectDetail> = {
  airl: {
    tl_dr:
      "J'ai construit AirI de A à Z : une app qui prédit les retards de vols au départ des aéroports canadiens. On entre un vol, et l'app te dit si tu risques d'être retardé et combien de temps. Le tout avec une carte interactive, de la météo en temps réel et deux modèles ML derrière.",

    sections: [
      {
        title: "Le problème",
        bullets: [
          "Je voulais un projet concret qui touche à la fois au ML, à une vraie API et à une interface utilisable.",
          "L'idée : est-ce qu'on peut prédire si un vol va être retardé avant même de monter dans l'avion ?",
        ],
      },
      {
        title: "Les données",
        bullets: [
          "J'ai récupéré l'historique des vols via BTS Transtats — des millions de lignes avec compagnie, route, heure, jour.",
          "J'ai branché Open-Meteo pour la météo en temps réel et historique (vent, précipitations, visibilité).",
          "OpenSky Network pour les vols live : positions, statuts, retards constatés.",
          "J'ai aussi construit des agrégats par route et par compagnie pour capturer les habitudes de retard.",
        ],
      },
      {
        title: "Le ML",
        bullets: [
          "Deux modèles : un LightGBM pour la classification (retardé ≥ 15 min ou pas) et un XGBoost pour estimer la durée en minutes.",
          "J'ai bossé le feature engineering : heure de départ, mois, compagnie, route, météo, historique agrégé.",
          "Validation temporelle pour éviter le data leakage — pas question d'entraîner sur des données futures.",
        ],
      },
      {
        title: "L'architecture",
        bullets: [
          "Un frontend Next.js avec une carte Leaflet.js — tu cliques sur un aéroport, tu vois les vols, tu lances une prédiction.",
          "Un backend FastAPI en Python qui sert les deux modèles et gère les appels météo + OpenSky.",
          "J'ai gardé les trois parties bien séparées (front / API / pipeline ML) pour que ce soit maintenable.",
        ],
      },
      {
        title: "Ce que j'ai appris",
        bullets: [
          "Construire un produit data de bout en bout tout seul, de la collecte jusqu'à l'interface.",
          "Faire cohabiter plusieurs sources de données hétérogènes dans un pipeline propre.",
          "Déployer sur Vercel + Railway et gérer la communication entre les deux services.",
        ],
      },
    ],

    devStack: [
      { name: "Next.js", logoSrc: "/stacks/nextjs.png" },
      { name: "TypeScript", logoSrc: "/stacks/typescript.svg" },
      { name: "Tailwind CSS", logoSrc: "/stacks/tailwindcss.svg" },
      { name: "Leaflet.js", logoSrc: "/stacks/leaflet.svg" },
      { name: "FastAPI", logoSrc: "/stacks/fastapi.svg" },
      { name: "Python", logoSrc: "/stacks/Python.png" },
    ],

    mlStack: [
      { name: "LightGBM", logoSrc: "/stacks/lightgbm.svg" },
      { name: "XGBoost", logoSrc: "/stacks/xgboost.png" },
      { name: "Scikit-learn", logoSrc: "/stacks/ScikitLearn.png" },
      { name: "Pandas", logoSrc: "/stacks/pandas.svg" },
    ],

    deployStack: [
      { name: "Vercel", logoSrc: "/vercel.svg" },
      { name: "Railway", logoSrc: "/stacks/railway.svg" },
      { name: "GitHub", logoSrc: "/stacks/Github.png" },
    ],
  },
};
