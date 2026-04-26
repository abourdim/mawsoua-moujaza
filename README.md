# L'Encyclopédie abrégée — Traduction française

**Mawsūʿa Mūjaza · موسوعة اليهود واليهودية والصهيونية — الموسوعة الموجزة**
*Encyclopédie abrégée des Juifs, du Judaïsme et du Sionisme*
**Abdelwahhab al-Massiri** (1938–2008) — Dar al-Shorouk, Le Caire

Projet de traduction française intégrale et fidèle de l'édition abrégée
en deux volumes (condensé en 2 vol. de l'*Encyclopédie* originale en
8 volumes publiée en 1999).

---

## État du projet

🚧 **Lot pilote v0.1** — pages liminaires + 21 premières entrées du cadre théorique traduites.

🌐 **Lecture en ligne** : https://abourdim.github.io/mawsoua-moujaza/lecture_fr.html
📂 **GitHub** : https://github.com/abourdim/mawsoua-moujaza

| | Vol 1 | Vol 2 | Total |
|---|---:|---:|---:|
| Mots arabes (OCR) | ~308 000 | ~343 000 | **~651 000** |
| Mots français à produire | ~430 000 | ~480 000 | **~910 000** |
| Pages PDF arabe | ~750 | ~750 | **~1 500** |

À titre de comparaison : *Rihlati al-Fikriyah* (projet `55-rihlati-fikriyah`)
faisait ~197 k mots arabes. Ce projet est **~3,3× plus volumineux**.

---

## Structure du repo

```
56-mawsoua-moujaza/
├── README.md                          # ce fichier
├── source/
│   ├── vol1.txt                       # OCR brut Volume I (3,4 Mo)
│   ├── vol2.txt                       # OCR brut Volume II (3,7 Mo)
│   ├── vol1.txt.gz                    # original archive.org
│   ├── vol2.txt.gz                    # original archive.org
│   └── entries_inventory.json         # inventaire approximatif des entrées
├── references/
│   ├── vol1.pdf                       # PDF arabe scanné (32 Mo)
│   └── vol2.pdf                       # PDF arabe scanné (33 Mo)
├── traduction_fr/                     # ← ici se construira la trad
│   └── (vide pour l'instant)
└── scripts/                           # ← outils de traitement
    └── (vide pour l'instant)
```

---

## Sources

- **OCR** : couche `_hocr_searchtext.txt.gz` extraite depuis
  [archive.org/details/Almissiri_Abdel_wahab](https://archive.org/details/Almissiri_Abdel_wahab)
- **PDFs scannés** : items « موسوعة اليهود واليهودية والصهيونية الموجزة - المجلد الأول/الثاني »
- **Édition originale** : Dar al-Shorouk, Le Caire (3 éditions)

---

## Décisions à prendre avant de démarrer la traduction

1. **Format de sortie** : Markdown `.md` (rapide, conversion PDF facile via Pandoc) **OU**
   HTML autonome `.html` style Cormorant (cohérent avec `55-rihlati-fikriyah`) ?
2. **Stratégie de découpage** : par lots de N entrées ? par sections du livre
   (vol1/partie1, vol1/partie2…) ? par tranches alphabétiques ?
3. **Nettoyage OCR préalable** : passer un pass de correction des artefacts
   (« مدسوعة » → « موسوعة ») avant traduction, ou corriger au fil de la traduction ?
4. **Public** : repo GitHub privé (sécurité copyright) ou public dès le début ?

---

## Principes de traduction (héritage de `55-rihlati-fikriyah`)

| Décision               | Choix                                                                |
|------------------------|----------------------------------------------------------------------|
| Fidélité               | **100 %**, aucun résumé, aucune réorganisation                        |
| Translittération       | Phonétique française (al-Massiri, ḥulūl, ḥawsala…)                   |
| Notes du traducteur    | Inline `[NdT : …]`, rares                                             |
| Concepts clés          | Préservés en italique avec glose                                      |
| Citations              | Italique entre guillemets « », bénédictions préservées                |
| Usage                  | **Personnel uniquement** — al-Massiri d. 2008, encore sous copyright  |

---

## Prochaine étape

Trancher les 4 décisions ci-dessus, puis lancer un **lot pilote** :
~30 entrées choisies en priorité (concepts signature : ḥulūl, sécularisation
totale, communauté fonctionnelle, modèle perceptif, fin de l'histoire,
modernité darwinienne, instrumentalisation, etc.).

Ce lot pilote permettra de :
- Valider la chaîne (OCR → trad → PDF)
- Mesurer le rythme réel
- Décider si l'on continue pour la couverture complète ou si l'on s'arrête au pilote

---

**Voir aussi** :
[`55-rihlati-fikriyah`](../55-rihlati-fikriyah/) — premier projet de
traduction al-Massiri (autobiographie intellectuelle, achevée v4.1).
