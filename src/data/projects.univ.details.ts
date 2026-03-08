export type ProjectDetail = {
    slug: string;
    tl_dr: string;
    sections: { title: string; bullets: string[] }[];
    stack: string[];
  };
  
  export const projectsUnivDetails: Record<string, ProjectDetail> = {
    "ift6758-nhl": {
      slug: "ift6758-nhl",
      tl_dr:
        "Projet NHL end-to-end : acquisition API + cache/SQLite → nettoyage SHOT/GOAL → visualisations (base & heatmaps) → modélisation xG (features + XGBoost/Optuna) avec ROC-AUC test 0.8472.",
      sections: [
        {
          title: "Problème",
          bullets: [
            "Construire un pipeline fiable pour analyser les tirs NHL.",
            "Estimer P(goal|shot) (xG) avec évaluation et calibration.",
          ],
        },
        {
          title: "Données",
          bullets: [
            "NHL play-by-play multi-saisons : événements, coordonnées, contexte EV/PP/SH, temps, etc.",
            "Dataset final centré sur SHOT/GOAL enrichi (distance, angle, contexte, rebond…).",
          ],
        },
        {
          title: "Approche",
          bullets: [
            "Acquisition : routes API + cache local + stockage SQLite (reproductibilité, exploration rapide).",
            "Nettoyage : orientation des coordonnées, distance au but, normalisation des événements.",
            "Outil interactif : exploration d’un match pour vérifier et déboguer les incohérences.",
            "Viz : distributions et heatmaps interactives par équipe/saison.",
            "ML xG : baselines (logreg) → feature engineering → XGBoost (Optuna) + calibration + suivi W&B.",
          ],
        },
        {
          title: "Résultats",
          bullets: [
            "Pipeline reproductible et dataset cohérent prêt pour analyses + ML.",
            "Meilleur modèle xG (XGBoost) : ROC-AUC test 0.8472 (2020–2021).",
          ],
        },
        {
          title: "Ce que ça prouve",
          bullets: [
            "Data engineering → EDA/viz → ML → évaluation : chaîne complète.",
            "Rigueur sur la qualité des données + métriques + reproductibilité.",
          ],
        },
      ],
      stack: ["Python", "API", "SQLite", "Pandas", "EDA", "Data Viz", "XGBoost", "Optuna", "W&B"],
    },
  
    "ift6285-projet1": {
      slug: "ift6285-projet1",
      tl_dr:
        "Cartographie ACL + classification : extraction/filtrage ACL Anthology, analyse des tendances, puis expérimentation de classification (Transformers/LLM).",
      sections: [
        {
          title: "Problème",
          bullets: [
            "Cartographier la littérature TALN (ACL/NAACL/EACL/EMNLP/…).",
            "Comparer des approches de classification (Transformers vs LLM).",
          ],
        },
        {
          title: "Données",
          bullets: [
            "Métadonnées ACL Anthology + filtres regex pour isoler des sous-domaines.",
            "Datasets de classification (émotions / sentiment / sarcasme).",
          ],
        },
        {
          title: "Approche",
          bullets: [
            "Extraction + filtrage + agrégations + visualisations.",
            "Expérimentations classification et analyse des limites (zero-shot vs fine-tuning).",
          ],
        },
        {
          title: "Résultats",
          bullets: ["Insights sur tendances et limites selon tâche/langue."],
        },
      ],
      stack: ["Python", "NLP", "Transformers", "LLM", "Data Viz"],
    },
  
    "ift6285-projet2": {
      slug: "ift6285-projet2",
      tl_dr:
        "Information Extraction CNN/DailyMail : comparaison spaCy/OpenIE/Transformers/LLM pour NER, acronymes et relations à grande échelle (~14k articles).",
      sections: [
        {
          title: "Problème",
          bullets: [
            "Extraire entités et relations (triplets) à grande échelle avec sorties lisibles et exploitables.",
          ],
        },
        {
          title: "Données",
          bullets: ["~14k articles CNN/DailyMail, ~460k phrases."],
        },
        {
          title: "Approche",
          bullets: [
            "Baseline spaCy + OpenIE (CoreNLP) + comparaison Transformers/LLM.",
            "Post-traitements : seuil de confiance + coréférence + filtre NER.",
            "Évaluation qualitative/quantitative (bruit, redondance, pronoms, relations fragmentées).",
          ],
        },
        {
          title: "Résultats",
          bullets: [
            "Coréférence testée sur un sous-échantillon (200 articles) pour améliorer la cohérence.",
            "Filtre NER : ~49% relations rejetées → sorties plus propres/interprétables.",
          ],
        },
      ],
      stack: ["Python", "spaCy", "OpenIE", "CoreNLP", "Transformers", "LLM"],
    },
  
    "ift6390": {
      slug: "ift6390",
      tl_dr:
        "Forecasting time series : prédire la consommation CVAC (jusqu’à 4h / 16 pas) avec météo + historique.",
      sections: [
        {
          title: "Problème",
          bullets: ["Prédire la consommation énergétique CVAC à court terme (multi-horizon)."],
        },
        {
          title: "Données",
          bullets: ["1 an de mesures : température int/ext, humidité, ensoleillement, vent…"],
        },
        {
          title: "Approche",
          bullets: [
            "Prétraitement + features (lags/rolling/variables exogènes).",
            "Comparaison baselines vs modèles plus avancés (selon ton notebook).",
            "Split temporel pour éviter le leakage.",
          ],
        },
      ],
      stack: ["Python", "Time Series", "Forecasting", "ML"],
    },
  
    "ift6261": {
      slug: "ift6261",
      tl_dr:
        "Synthèse structurée sur les biais cognitifs : définitions, expériences clés, impacts sur décisions et IA.",
      sections: [
        {
          title: "Contenu",
          bullets: [
            "Biais : origines, catégories, expériences classiques et interprétations.",
            "Impacts dans des systèmes modernes (dont IA).",
          ],
        },
        {
          title: "Ce que ça prouve",
          bullets: ["Rigueur, synthèse, vulgarisation, esprit critique."],
        },
      ],
      stack: ["Scientific Writing", "AI Ethics"],
    },
  };