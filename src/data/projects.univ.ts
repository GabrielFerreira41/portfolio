export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    description?: string;
    tags: string[];
    year?: string;
    impact?: string;
    links?: { label: string; href: string }[];
  };
  
  export const projectsUniv: Project[] = [
    {
      slug: "ift6758-nhl",
      title: "IFT 6758 — NHL Analytics (pipeline + viz + xG)",
      subtitle:
        "API NHL → cache/SQLite → nettoyage SHOT/GOAL → visualisations → modèle xG (XGBoost/Optuna).",
      description:
        "Projet end-to-end : ingestion play-by-play, pipeline reproductible, outil interactif, visualisations (heatmaps), puis modélisation de P(goal|shot).",
      tags: ["Python", "API", "SQLite", "Pandas", "EDA", "Data Viz", "XGBoost"],
      year: "Automne 2025",
      impact: "xG XGBoost : ROC-AUC test 0.8472 (saison régulière 2020–2021).",
      links: [
        { label: "Code", href: "https://github.com/..." },
        { label: "W&B", href: "https://wandb.ai/..." },
      ],
    },
    {
      slug: "ift6285-projet1",
      title: "IFT 6285 — Projet 1 (ACL Cartography + Classification)",
      subtitle:
        "Extraction/filtrage ACL Anthology + analyse des tendances + classification (Transformers/LLM).",
      description:
        "Cartographie de la littérature TALN à partir de métadonnées ACL puis expérimentations de classification sur datasets publics.",
      tags: ["NLP", "Data Analysis", "Text Classification", "Transformers", "LLM"],
      year: "Automne 2025",
      links: [
        { label: "Code", href: "https://github.com/..." },
        { label: "Rapport", href: "https://..." },
      ],
    },
    {
      slug: "ift6285-projet2",
      title: "IFT 6285 — Projet 2 (Information Extraction CNN/DailyMail)",
      subtitle:
        "Comparer spaCy/OpenIE/Transformers/LLM pour NER, acronymes et relations à grande échelle.",
      description:
        "Extraction d’entités et triplets (sujet-relation-objet) sur ~14k articles CNN/DailyMail avec post-traitements (confidence, coréférence, filtre NER).",
      tags: ["NLP", "Information Extraction", "OpenIE", "spaCy", "CoreNLP", "LLM"],
      year: "Automne 2025",
      impact:
        "Post-traitement : coréférence + filtre NER → ~49% relations rejetées pour améliorer la lisibilité.",
      links: [
        { label: "Code", href: "https://github.com/..." },
        { label: "Rapport", href: "https://..." },
      ],
    },
    {
      slug: "ift6390",
      title: "IFT 6390 — Forecasting CVAC (time series)",
      subtitle:
        "Prévision multi-horizon (jusqu’à 4h / 16 pas) avec météo + historique de consommation.",
      description:
        "Projet de séries temporelles sur 1 an de données (températures, humidité, vent, ensoleillement) pour prédire la consommation CVAC à court terme.",
      tags: ["Time Series", "Forecasting", "Machine Learning"],
      year: "Hiver 2025",
      links: [{ label: "Notebook", href: "https://github.com/..." }],
    },
    {
      slug: "ift6261",
      title: "IFT 6261 — Biais cognitifs et IA (synthèse)",
      subtitle: "Synthèse : définitions, expériences clés et impacts modernes (dont IA).",
      description:
        "Travail de synthèse structuré sur les biais cognitifs et leurs implications dans la prise de décision et les systèmes d’IA.",
      tags: ["AI Ethics", "Cognitive Bias", "Scientific Writing"],
      year: "2025",
      links: [{ label: "Texte", href: "https://..." }],
    },
  ];