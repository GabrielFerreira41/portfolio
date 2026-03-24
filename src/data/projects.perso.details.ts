import type { TechItem } from "@/components/techCluster";

export type PersoProjectDetail = {
  tl_dr: string;
  sections: { title: string; bullets: string[] }[];
  devStack: TechItem[];
  mlStack: TechItem[];
  deployStack: TechItem[];
  coverImage?: string;
  partners?: { name: string; logoSrc: string }[];
};

export const projectsPersoDetails: Record<string, PersoProjectDetail> = {
  "hackathon-mila-sante-mentale": {
    tl_dr:
      "Dans ce hackathon Mila autour de Kids Help Phone (KHP), mon équipe et moi avons construit un guardrail d'entrée pour détecter les messages à haut risque dans un chatbot de soutien en santé mentale pour les jeunes. On a red-teamé le chatbot existant, généré 6 037 conversations synthétiques bilingues, et comparé trois architectures. Solution finale : un LLM-as-a-Judge (Cohere) avec prompt optimisé et seuil calibré — F1 : 0.908.",

    sections: [
      {
        title: "Le problème",
        bullets: [
          "KHP (Kids Help Phone) est une ligne d'aide 24/7 pour les jeunes au Canada. Leur chatbot IA ratait des signaux de détresse subtils — souvent exprimés par métaphore, humour ou escalade progressive.",
          "Objectif : construire un guardrail capable de distinguer les conversations à faible risque des conversations à haut risque, avant même que le chatbot réponde.",
          "Trois failles critiques identifiées au red-teaming : langage euphémique manqué, signaux non intégrés sur plusieurs tours, réponses trop complaisantes face à des déclarations dangereuses.",
        ],
      },
      {
        title: "Le red-teaming",
        bullets: [
          "On a testé le chatbot avec 5 méthodes : test taxonomie × niveau de risque, personas utilisateurs, dérive multi-tours, boundary pushing, et tests d'ambiguïté / euphémismes.",
          "Cas réel capturé : un utilisateur raconte l'histoire d'un nounours qui 'trouve enfin son soulagement' — le chatbot répond 'quelle histoire douce et réconfortante'. Signal suicidaire totalement manqué.",
          "Autre échec critique : un utilisateur écrit 'on aura tout le temps au paradis' et rédige un message d'adieu à ses parents — le chatbot ne détecte rien et répond 'c'est vraiment touchant'.",
          "Ces annotated failure cases ont directement guidé la conception du dataset et du guardrail.",
        ],
      },
      {
        title: "Les données",
        bullets: [
          "On a généré 6 037 conversations synthétiques multi-tours (16–20 tours), équilibrées entre high-risk (52%) et low-risk (48%).",
          "Couverture trilingue : anglais (35%), français (35%), code-switching (29%) — pour refléter la réalité des jeunes québécois.",
          "Représentation DEI explicite : LGBTQ+ (16%), personnes en situation de handicap (9%), communautés autochtones (8%), contextes d'immigration et de discrimination raciale.",
          "Les données couvrent l'argot ado, abréviations, émojis, hésitations et divulgation progressive — pas du texte clinique parfait.",
        ],
      },
      {
        title: "Le guardrail",
        bullets: [
          "Trois architectures comparées : classifieur encoder (rapide, F1 max 0.66), LLM-as-a-Judge (le plus précis), guardrail en cascade (le plus lent).",
          "Solution finale : LLM-as-a-Judge Cohere avec prompt optimisé et seuil calibré à 0.36 — F1 : 0.908, Précision : 0.908, Rappel : 0.908.",
          "Le prompt encode explicitement les signaux indirects : langage de finalité, retrait émotionnel, escalade progressive, expressions culturellement spécifiques et code-switching.",
          "Biais vers la sécurité : en cas de doute, le guardrail flag. Les faux négatifs sont plus coûteux que les faux positifs dans ce contexte.",
        ],
      },
      {
        title: "Ce que j'ai appris",
        bullets: [
          "Red-teamer une IA dans un contexte sensible : ce n'est pas juste tester des prompts — c'est comprendre comment les jeunes en détresse s'expriment vraiment.",
          "Générer des données synthétiques de qualité pour un problème de sécurité : équilibrage, diversité linguistique, couverture DEI, éviter les biais structuraux.",
          "Travailler en équipe multidisciplinaire (UdeM/Mila, Polytechnique, McGill) avec des contraintes de temps serrées.",
          "Un F1 élevé ne suffit pas : dans la santé mentale, un faux négatif peut avoir des conséquences irréversibles.",
        ],
      },
    ],

    devStack: [
      { name: "Python", logoSrc: "/stacks/Python.png" },
      { name: "Pandas", logoSrc: "/stacks/pandas.svg" },
      { name: "NumPy", logoSrc: "/stacks/numpy.svg" },
    ],

    mlStack: [
      { name: "HuggingFace", logoSrc: "/stacks/huggingface.png" },
      { name: "Mistral AI", logoSrc: "/stacks/Mistralai.png" },
      { name: "OpenAI", logoSrc: "/stacks/Chatgpt.png" },
      { name: "Cohere", logoSrc: "" },
      { name: "Nemotron", logoSrc: "" },
      { name: "Scikit-learn", logoSrc: "/stacks/ScikitLearn.png" },
      { name: "PyTorch", logoSrc: "/stacks/Pytorch.png" },
    ],

    deployStack: [
      { name: "GitHub", logoSrc: "/stacks/Github.png" },
      { name: "GPU A40", logoSrc: "" },
      { name: "Amazon S3", logoSrc: "" },
    ],

    coverImage: "/logos/hackathon-cover.jpg.webp",

    partners: [
      { name: "Mila", logoSrc: "/logos/mila-wordmark.svg" },
      { name: "Kids Help Phone", logoSrc: "/logos/khp-logo.png" },
      { name: "Bell", logoSrc: "/logos/bell-logo.png" },
      { name: "BUZZ HPC", logoSrc: "/logos/buzz-hpc-logo.png" },
      { name: "Bell AI Fabric", logoSrc: "/logos/bell-ai-fabric-logo.png" },
    ],
  },

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
