# Plan — Corpus al-Massīrī (FR)

> **Règle d'or révisée :** on ne traduit que les ouvrages **dont l'OCR
> arabe est disponible** — soit déjà extrait localement dans `koutoub/`,
> soit présent sur archive.org sous forme de `_djvu.xml` (extraction
> mécanique, sans OCRisation maison).

## 1. Périmètre éligible

### 1.1. Sources locales déjà extraites — `priorité 0`

| ID | Titre | Lignes OCR | Mots ar. | Statut |
|----|-------|-----------:|---------:|:------:|
| 55 | *Riḥlatī al-fikriyya* | 4 843 | 221 942 | ✅ clôturé |
| 56 | *al-Mawsūʿa al-mūjaza* Vol. I | 6 832 | 308 102 | ✅ clôturé |
| 56 | *al-Mawsūʿa al-mūjaza* Vol. II | 8 020 | 342 818 | ✅ clôturé |
| 57 | *Man huwa al-yahūdī ?* | 469 | 23 422 | ✅ clôturé |
| 58 | *al-Ḥadātha wa-mā baʿdaha* | 875 | 29 961 | ✅ clôturé |
| 59 | *al-Jamāʿāt al-waẓīfiyya* | 2 789 | 156 797 | ✅ clôturé |
| 60 | *Difāʿ ʿan al-insān* | 12 017 | ~310 000 | ✅ clôturé (50 lots, TAG-V1.0-DIFAA-CLOTURE) |
| 61 | *al-Falsafa al-māddiyya wa-tafkīk al-insān* | 6 633 | ~170 000 | ✅ clôturé (27 lots, TAG-V1.0-FALSAFA-CLOTURE) |
| 62 | *al-ʿAlmāniyya al-juzʾiyya wa-l-šāmila* Vol I | 10 511 | ~270 000 | 🟡 en cours (30/~107 lots, TAG-V0.30-ALMANIYYA-LOT30) |
| 62 | *al-ʿAlmāniyya al-juzʾiyya wa-l-šāmila* Vol II | 15 088 | ~390 000 | ⏳ pending (à attaquer après Vol I) |
| **Total** | | **68 077** | **~2 220 000** | **8/9 clôturés, 1 en cours** |

→ Vague A : 60 + 61 clôturés. 62 (Vol I 10 511 l + Vol II 15 088 l = 25 599 l, ~107 lots) en cours.
→ État au 2026-04-28 : batch 6 livré (TAG-V0.30-ALMANIYYA-LOT30, lignes 1-7200/10511 du Vol I).
→ Reprise : batch 7 (lots 31-35, lignes 7200-8400 du Vol I).

### 1.2. Archive.org `Almissiri_Abdel_wahab` — `disponible`

Vérification effectuée via `ia metadata` : item *عبد الوهاب المسيري - الأعمال الكاملة*.

- **87 PDF** au total, **539 fichiers** dérivés (chocr / hocr / djvu / jp2 / etc.).
- **86 PDF avec OCR** (`_djvu.xml`) — extraction mécanique possible.
- **1 PDF sans OCR** : *Inhiyār Isrāʾīl min al-dākhil*.
- Taille totale OCR-disponible : ~1,8 Go (~44 000 pages estimées).

→ **80 ouvrages éligibles** non encore extraits localement
(87 − 1 sans OCR − 6 déjà locaux).

---

## 2. Procédure d'extraction OCR depuis archive.org

```bash
# 1. Outil
pip3 install --user --break-system-packages internetarchive
export PATH="$HOME/Library/Python/3.14/bin:$PATH"

# 2. Liste des fichiers d'un item
ia metadata Almissiri_Abdel_wahab | jq '.files[].name' | grep '_djvu.xml'

# 3. Téléchargement du djvu.xml et du PDF
ia download Almissiri_Abdel_wahab \
    "TITRE_djvu.xml" "TITRE.pdf" \
    --destdir koutoub/NN-slug/references/

# 4. Conversion djvu.xml → texte brut (script à écrire)
python3 scripts/djvuxml_to_text.py \
    koutoub/NN-slug/references/TITRE_djvu.xml \
    > koutoub/NN-slug/source/source.txt

# 5. Bootstrap repo (README, CHANGELOG, lecture_fr.html, scripts, gitignore)
# 6. Lancement pipeline traduction (5 agents / batch)
```

`_djvu.xml` est un format XML structuré (DjVu 3.x) où chaque page contient
des balises `<WORD>` et `<LINE>` avec coordonnées. Un parser ~30 lignes
en Python (xml.etree) suffit pour extraire le texte brut.

---

## 3. Plan de travail proposé

### 3.1. Outillage — `priorité 1`

- [ ] **Script d'extraction OCR** `scripts/ia_extract.py` à la racine de
      `koutoub/` (mutualisé pour tous les futurs ouvrages).
      - Entrée : ID archive.org item + nom de fichier base.
      - Sortie : `source/source.txt` propre + `references/source-original.pdf`.
      - Effort : 1 lot.

- [ ] **Script de bootstrap repo** `scripts/bootstrap_book.sh`.
      - Crée `koutoub/NN-slug/{source,references,scripts,traduction_fr}`.
      - Génère `README.md`, `CHANGELOG.md`, `lecture_fr.html` (gabarit),
        `.gitignore`.
      - Initialise git + premier commit + remote optionnel.
      - Effort : 1 lot.

### 3.2. Inventaire intégral archive.org — trié par taille croissante

Liste vérifiée des **87 PDF** de l'item `Almissiri_Abdel_wahab` (≈ 1,8 Go),
triée du plus léger au plus lourd. La colonne *Lots* est :
- une **valeur réelle** pour les ouvrages déjà clôturés,
- une **estimation** sinon : `MB × 0,5` pour les essais ; `MB × 1,5` pour
les ouvrages encyclopédiques/dictionnairiques (granularité fine par entrée).

**Légende :** ✅ déjà clôturé localement · 📄 OCR disponible (à extraire)
· ❌ sans OCR sur archive.org

| # | MB | Lots | Titre arabe | Translittération · Français | Statut |
|--:|-----:|----:|-------------|-----------------------------|:------:|
| 1 | 0,4 | 3 | <span dir="rtl">مقدمة لقراءة فكر علي عزت بيجوفيتش</span> | *Muqaddima li-qirāʾat fikr ʿAlī ʿIzzat Begovic* — Introduction à la pensée de Begovic | 📄 |
| 2 | 0,5 | 3 | <span dir="rtl">الأيديولوجية الصهيونية — القسم الأول</span> | *al-Aydiyūlūjiyya al-ṣahyūniyya I* — L'idéologie sioniste, partie 1 | 📄 |
| 3 | 0,6 | 3 | <span dir="rtl">الأيديولوجية الصهيونية — القسم الثاني</span> | *al-Aydiyūlūjiyya al-ṣahyūniyya II* — L'idéologie sioniste, partie 2 | 📄 |
| 4 | 0,8 | 3 | <span dir="rtl">الغرب والعالم — القسم الأول</span> | *al-Ġarb wa-l-ʿālam I* — L'Occident et le monde, partie 1 | 📄 |
| 5 | 0,8 | 3 | <span dir="rtl">الغرب والعالم — القسم الثاني</span> | *al-Ġarb wa-l-ʿālam II* — L'Occident et le monde, partie 2 | 📄 |
| 6 | 1,0 | 3 | <span dir="rtl">من الانتفاضة إلى حرب التحرير الفلسطينية</span> | *Min al-intifāḍa ilā ḥarb al-taḥrīr al-filasṭīniyya* — De l'Intifada à la guerre de libération palestinienne | 📄 |
| 7 | 2,0 | 3 | <span dir="rtl">عبد الوهاب المسيري — دراسة في سيرته المعرفية</span> | *al-Massīrī : étude de sa biographie intellectuelle* (A. ʿAṭiyya) | 📄 |
| 8 | 2,2 | 3 | <span dir="rtl">أوراق الملاح القديم</span> | *Awrāq al-mallāḥ al-qadīm* — Papiers du vieux marin | 📄 |
| 9 | 2,9 | 3 | <span dir="rtl">الموسوعات الفردية — المسيري أنموذجًا</span> | *al-Mawsūʿāt al-fardiyya* — Encyclopédies individuelles : al-Massīrī comme modèle | 📄 |
| 10 | 3,4 | 3 | <span dir="rtl">الصهيونية وتأثيرها في علاقة الإسلام بالغرب</span> | *al-Ṣahyūniyya wa-taʾṯīruhā fī ʿalāqat al-Islām bi-l-Ġarb* — Sionisme et relation Islam-Occident | 📄 |
| 11 | 4,3 | 3 | <span dir="rtl">تاريخ الفكر الصهيوني</span> | *Tārīkh al-fikr al-ṣahyūnī* — Histoire de la pensée sioniste | 📄 |
| 12 | 4,3 | 3 | <span dir="rtl">اليهود في عقل هؤلاء</span> | *al-Yahūd fī ʿaql hāʾulāʾ* — Les juifs dans l'esprit de ceux-là | 📄 |
| 13 | 4,4 | 3 | <span dir="rtl">الأقليات اليهودية بين التجارة والإدعاء القومي</span> | *al-Aqalliyyāt al-yahūdiyya* — Les minorités juives entre commerce et prétention nationale | 📄 |
| 14 | 4,9 | **5** | <span dir="rtl">من هو اليهودي ؟</span> | *Man huwa al-yahūdī ?* — Qui est le juif ? | ✅ **57** |
| 15 | 5,0 | 3 | <span dir="rtl">من المادية إلى الإنسانية الإسلامية</span> | *Min al-māddiyya ilā l-insāniyya al-islāmiyya* — De la matérialité à l'humanisme islamique | 📄 |
| 16 | 5,1 | 3 | <span dir="rtl">مطارحات في العقل والتنوير</span> | *Maṭāriḥāt fī l-ʿaql wa-l-tanwīr* — Échanges sur la raison et les Lumières | 📄 |
| 17 | 5,3 | — | <span dir="rtl">انهيار إسرائيل من الداخل</span> | *Inhiyār Isrāʾīl min al-dākhil* — L'effondrement d'Israël de l'intérieur | ❌ |
| 18 | 5,4 | 3 | <span dir="rtl">المشروع الصهيوني في الفكر والتطبيق</span> | *al-Mašrūʿ al-ṣahyūnī* — Le projet sioniste : pensée et pratique | 📄 |
| 19 | 6,0 | 3 | <span dir="rtl">ثمار رحلة عبد الوهاب المسيري الفكرية</span> | *Ṯimār riḥlat al-Massīrī al-fikriyya* — Fruits du voyage intellectuel | 📄 |
| 20 | 6,3 | **7** | <span dir="rtl">الحداثة وما بعد الحداثة (ندوة)</span> | *al-Ḥadātha wa-mā baʿd al-ḥadātha (nadwa)* — Modernité et postmodernité (colloque) | ✅ **58** |
| 21 | 6,5 | 3 | <span dir="rtl">قضية المرأة بين التحرير والتمركز حول الأنثى</span> | *Qaḍiyyat al-marʾa* — La cause des femmes : libération et féminocentrisme | 📄 |
| 22 | 6,8 | 3 | <span dir="rtl">جارودي : الأساطير الزائفة وانتصار الإنسان</span> | *Garaudy : les mythes fallacieux et la victoire de l'humain* | 📄 |
| 23 | 6,8 | 3 | <span dir="rtl">الفردوس الأرضي</span> | *al-Firdaws al-arḍī* — Le paradis terrestre (civilisation américaine) | 📄 |
| 24 | 7,5 | 4 | <span dir="rtl">انتفاضة الأقصى بين الواقع والمستقبل</span> | *Intifāḍat al-Aqṣā* — L'Intifada al-Aqsa entre réel et futur | 📄 |
| 25 | 7,5 | 4 | <span dir="rtl">مقدمة لدراسة الصراع العربي الإسرائيلي</span> | *Muqaddima li-dirāsat al-ṣirāʿ al-ʿarabī al-isrāʾīlī* — Introduction à l'étude du conflit | 📄 |
| 26 | 7,5 | 4 | <span dir="rtl">الهوية والحركية الإسلامية — حوارات</span> | *al-Hawiyya wa-l-ḥarakiyya al-islāmiyya* — Identité et dynamique islamique | 📄 |
| 27 | 7,5 | 4 | <span dir="rtl">فكر حركة الاستنارة وتناقضاته</span> | *Fikr ḥarakat al-istinārā* — La pensée du mouvement des Lumières et ses contradictions | 📄 |
| 28 | 8,1 | 4 | <span dir="rtl">اليهود — أنثروبولوجيا</span> | *al-Yahūd — anṯrūbūlūjiyā* — Les juifs : anthropologie | 📄 |
| 29 | 8,4 | 4 | <span dir="rtl">إشكالية التحيز — الفن والعمارة (3/7)</span> | *Iškāliyyat al-taḥayyuz 3/7* — Problématique du biais : art et architecture | 📄 |
| 30 | 8,6 | 4 | <span dir="rtl">العالم من منظور غربي</span> | *al-ʿĀlam min manẓūr ġarbī* — Le monde vu d'Occident | 📄 |
| 31 | 8,6 | 4 | <span dir="rtl">رحابة الإنسانية والإيمان</span> | *Riḥābat al-insāniyya wa-l-īmān* — L'amplitude de l'humanité et de la foi | 📄 |
| 32 | 8,8 | 4 | <span dir="rtl">أوراق حزب الوسط الجديد</span> | *Awrāq Ḥizb al-wasaṭ al-jadīd* — Documents du nouveau parti du centre | 📄 |
| 33 | 9,7 | 5 | <span dir="rtl">أوراق فلسفية</span> | *Awrāq falsafiyya* — Papiers philosophiques | 📄 |
| 34 | 9,9 | 5 | <span dir="rtl">إشكالية التحيز — العلوم الطبيعية (4/7)</span> | *Iškāliyyat al-taḥayyuz 4/7* — Sciences de la nature | 📄 |
| 35 | 10,0 | 5 | <span dir="rtl">الانتفاضة الفلسطينية والأزمة الصهيونية</span> | *al-Intifāḍa al-filasṭīniyya wa-l-azma al-ṣahyūniyya* — Intifada et crise sioniste | 📄 |
| 36 | 10,3 | 5 | <span dir="rtl">العلمانية تحت المجهر</span> | *al-ʿAlmāniyya taḥt al-mijhar* — Le sécularisme au microscope | 📄 |
| 37 | 11,1 | 17 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (8/8)</span> | *Mawsūʿa Kubrā — vol. 8* (encyclopédie complète) | 📄 |
| 38 | 11,2 | 6 | <span dir="rtl">المسيري في عيون أصدقائه ونقاده</span> | *al-Massīrī fī ʿuyūn aṣdiqāʾihi wa-nuqqādihi* — Vu par ses amis et critiques | 📄 |
| 39 | 11,8 | 6 | <span dir="rtl">العلمانية والحداثة والعولمة</span> | *al-ʿAlmāniyya wa-l-ḥadātha wa-l-ʿawlama* — Sécularisme, modernité, mondialisation | 📄 |
| 40 | 13,3 | 7 | <span dir="rtl">إشكالية التحيز (1/7) — رؤية معرفية</span> | *Iškāliyyat al-taḥayyuz 1/7* — Vision épistémologique | 📄 |
| 41 | 13,6 | 7 | <span dir="rtl">العلمانية الجزئية والشاملة — مجلد الأول</span> | *al-ʿAlmāniyya al-juzʾiyya wa-l-šāmila I* ★ | 📄 |
| 42 | 14,3 | 7 | <span dir="rtl">الثقافة والمنهج</span> | *al-Ṯaqāfa wa-l-manhaj* — Culture et méthode | 📄 |
| 43 | 14,6 | 7 | <span dir="rtl">الأكاذيب الصهيونية</span> | *al-Akāḏīb al-ṣahyūniyya* — Les mensonges sionistes | 📄 |
| 44 | 14,8 | 7 | <span dir="rtl">الحمائم والصقور والنعام</span> | *al-Ḥamāʾim wa-l-ṣuqūr wa-l-naʿām* — Colombes, faucons et autruches | 📄 |
| 45 | 14,9 | 7 | <span dir="rtl">إشكالية التحيز — العلوم الاجتماعية (5/7)</span> | *Iškāliyyat al-taḥayyuz 5/7* — Sciences sociales | 📄 |
| 46 | 15,2 | 8 | <span dir="rtl">نهاية التاريخ — مقدمة لدراسة بنية الفكر الصهيوني</span> | *Nihāyat al-tārīkh* — Fin de l'histoire et structure de la pensée sioniste | 📄 |
| 47 | 15,4 | 8 | <span dir="rtl">الإدراك الصهيوني للعرب والحوار المسلح</span> | *al-Idrāk al-ṣahyūnī li-l-ʿarab* — La perception sioniste des Arabes et le dialogue armé | 📄 |
| 48 | 16,2 | 8 | <span dir="rtl">في عالم المسيري — حوار نقدي حضاري II</span> | *Fī ʿālam al-Massīrī II* — Dans le monde de Massiri (vol. 2) | 📄 |
| 49 | 17,1 | 9 | <span dir="rtl">أسرار العقل الصهيوني</span> | *Asrār al-ʿaql al-ṣahyūnī* — Les secrets de l'esprit sioniste | 📄 |
| 50 | 17,8 | 9 | <span dir="rtl">إشكالية التحيز — الفكر الغربي الحديث (7/7)</span> | *Iškāliyyat al-taḥayyuz 7/7* — Pensée occidentale moderne | 📄 |
| 51 | 17,8 | 9 | <span dir="rtl">إشكالية التحيز — علم النفس والاتصال (6/7)</span> | *Iškāliyyat al-taḥayyuz 6/7* — Psychologie, éducation, communication | 📄 |
| 52 | 17,8 | 9 | <span dir="rtl">العلمانية الجزئية والشاملة — مجلد الثاني</span> | *al-ʿAlmāniyya al-juzʾiyya wa-l-šāmila II* ★ | 📄 |
| 53 | 18,6 | **30** | <span dir="rtl">الجماعات الوظيفية اليهودية</span> | *al-Jamāʿāt al-waẓīfiyya al-yahūdiyya* — Les groupes juifs fonctionnels | ✅ **59** |
| 54 | 20,5 | 10 | <span dir="rtl">إشكالية التحيز — الأدب والنقد (2/7)</span> | *Iškāliyyat al-taḥayyuz 2/7* — Littérature et critique | 📄 |
| 55 | 21,9 | 11 | <span dir="rtl">الصهيونية وخيوط العنكبوت</span> | *al-Ṣahyūniyya wa-khuyūṭ al-ʿankabūt* — Sionisme et fils d'araignée | 📄 |
| 56 | 23,0 | 11 | <span dir="rtl">الفلسفة المادية وتفكيك الإنسان</span> | *al-Falsafa al-māddiyya wa-tafkīk al-insān* — Philosophie matérialiste et déconstruction de l'humain ★ | 📄 |
| 57 | 24,1 | 36 | <span dir="rtl">موسوعة المفاهيم والمصطلحات الصهيونية</span> | *Mawsūʿat al-mafāhīm wa-l-muṣṭalaḥāt al-ṣahyūniyya* — Encyclopédie des concepts sionistes | 📄 |
| 58 | 24,9 | 12 | <span dir="rtl">اللغة والمجاز بين التوحيد ووحدة الوجود</span> | *al-Luġa wa-l-majāz* — Langue et métaphore : tawḥīd vs panthéisme | 📄 |
| 59 | 26,4 | 13 | <span dir="rtl">البروتوكولات واليهودية والصهيونية</span> | *al-Brūtūkūlāt wa-l-yahūdiyya wa-l-ṣahyūniyya* — Les Protocoles, judaïsme et sionisme | 📄 |
| 60 | 27,7 | 42 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (7/8)</span> | *Mawsūʿa Kubrā — vol. 7* | 📄 |
| 61 | 27,8 | 14 | <span dir="rtl">الجمعيات السرية في العالم</span> | *al-Jamʿiyyāt al-sirriyya* — Sociétés secrètes (Protocoles, Bahaïsme, Maçonnerie) | 📄 |
| 62 | 27,9 | 14 | <span dir="rtl">إسرائيل وجنوب أفريقيا</span> | *Isrāʾīl wa-Janūb Ifrīqiyā* — Israël et l'Afrique du Sud | 📄 |
| 63 | 29,3 | 15 | <span dir="rtl">في الخطاب والمصطلح الصهيوني</span> | *Fī l-khiṭāb wa-l-muṣṭalaḥ al-ṣahyūnī* — Discours et terminologie sionistes | 📄 |
| 64 | 31,7 | 16 | <span dir="rtl">التجانس اليهودي والشخصية اليهودية</span> | *al-Tajānus al-yahūdī wa-l-šakhṣiyya al-yahūdiyya* — Homogénéité et personnalité juives | 📄 |
| 65 | 32,0 | 16 | <span dir="rtl">الحداثة وما بعد الحداثة</span> | *al-Ḥadātha wa-mā baʿd al-ḥadātha* — Modernité et postmodernité (édition pleine) | 📄 |
| 66 | 33,6 | 17 | <span dir="rtl">الصهيونية والعنف</span> | *al-Ṣahyūniyya wa-l-ʿunf* — Sionisme et violence | 📄 |
| 67 | 33,7 | 17 | <span dir="rtl">الصهيونية والحضارة الغربية الحديثة</span> | *al-Ṣahyūniyya wa-l-ḥaḍāra al-ġarbiyya al-ḥadītha* — Sionisme et civilisation occidentale | 📄 |
| 68 | 34,0 | 51 | <span dir="rtl">الموسوعة الموجزة — المجلد الأول</span> | *Mawsūʿa Mūjaza — vol. I* (édition séparée) | 📄 |
| 69 | 34,7 | 52 | <span dir="rtl">الموسوعة الموجزة — المجلد الثاني</span> | *Mawsūʿa Mūjaza — vol. II* (édition séparée) | 📄 |
| 70 | 34,7 | 52 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (1/8)</span> | *Mawsūʿa Kubrā — vol. 1* | 📄 |
| 71 | 36,4 | 55 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (6/8)</span> | *Mawsūʿa Kubrā — vol. 6* | 📄 |
| 72 | 37,4 | 19 | <span dir="rtl">دفاع عن الإنسان</span> | *Difāʿ ʿan al-insān* — Défense de l'humain ★ | 📄 |
| 73 | 38,3 | 57 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (4/8)</span> | *Mawsūʿa Kubrā — vol. 4* | 📄 |
| 74 | 38,4 | 19 | <span dir="rtl">اليد الخفية</span> | *al-Yad al-khafiyya* — La main cachée (mouvements juifs subversifs) | 📄 |
| 75 | 38,5 | 19 | <span dir="rtl">في عالم المسيري — حوار نقدي حضاري I</span> | *Fī ʿālam al-Massīrī I* — Dans le monde de Massiri (vol. 1) | 📄 |
| 76 | 38,7 | 19 | <span dir="rtl">الصهيونية والنازية ونهاية التاريخ</span> | *al-Ṣahyūniyya wa-l-nāziyya wa-nihāyat al-tārīkh* — Sionisme, nazisme et fin de l'histoire | 📄 |
| 77 | 39,6 | 59 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (5/8)</span> | *Mawsūʿa Kubrā — vol. 5* | 📄 |
| 78 | 41,9 | 21 | <span dir="rtl">الأيديولوجية الصهيونية — دراسة في علم اجتماع المعرفة</span> | *al-Aydiyūlūjiyya al-ṣahyūniyya* (édition étendue) — étude de sociologie de la connaissance | 📄 |
| 79 | 42,4 | 64 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (2/8)</span> | *Mawsūʿa Kubrā — vol. 2* | 📄 |
| 80 | 43,4 | 22 | <span dir="rtl">من هم اليهود وما هي اليهودية ؟</span> | *Man hum al-yahūd wa-mā hiya al-yahūdiyya ?* — Qui sont les juifs et qu'est-ce que le judaïsme ? | 📄 |
| 81 | 44,4 | 22 | <span dir="rtl">دراسات معرفية في الحداثة الغربية</span> | *Dirāsāt maʿrifiyya fī l-ḥadātha al-ġarbiyya* — Études épistémologiques sur la modernité | 📄 |
| 82 | 45,5 | 68 | <span dir="rtl">الموسوعة — نموذج تفسيري جديد (3/8)</span> | *Mawsūʿa Kubrā — vol. 3* | 📄 |
| 83 | 56,9 | 28 | <span dir="rtl">إشكالية التحيز (الموجزة) — الجزء الثاني</span> | *Iškāliyyat al-taḥayyuz al-mūjaza II* — Problématique du biais (abrégée) vol. 2 (IIIT) | 📄 |
| 84 | 62,2 | 31 | <span dir="rtl">إشكالية التحيز (الموجزة) — الجزء الأول</span> | *Iškāliyyat al-taḥayyuz al-mūjaza I* — Problématique du biais (abrégée) vol. 1 (IIIT) | 📄 |
| 85 | 72,0 | **57** | <span dir="rtl">الموسوعة الموجزة في جزأين 1</span> | *Mawsūʿa Mūjaza fī juzʾayn — vol. I* | ✅ **56-I** |
| 86 | 81,9 | **289** | <span dir="rtl">الموسوعة الموجزة في جزأين 2</span> | *Mawsūʿa Mūjaza fī juzʾayn — vol. II* | ✅ **56-II** |
| 87 | 87,4 | **10** | <span dir="rtl">رحلتي الفكرية في البذور والجذور والثمر</span> | *Riḥlatī al-fikriyya* — Mon voyage intellectuel | ✅ **55** |

**Cumul d'effort par tranche** (estimation, hors clôturés) :

| Tranche (MB) | Ouvrages | Lots est. | Cumul lots |
|--------------|---------:|----------:|-----------:|
| 0–5 (rangs 1-15, hors 14) | 14 | 45 | 45 |
| 5–10 (rangs 16-35, hors 17, 20) | 18 | 70 | 115 |
| 10–20 (rangs 36-52, hors 53) | 16 | 110 | 225 |
| 20–35 (rangs 54-69) | 16 | ~330 | 555 |
| 35–50 (rangs 70-82) | 13 | ~510 | 1 065 |
| 50+ (rangs 83-87, hors clôturés) | 2 | 59 | 1 124 |

→ Pour boucler **toutes les colonnes 📄** (80 ouvrages restants),
compter ≈ **1 100 lots**, dont **730 lots** dans les seuls volumes
encyclopédiques (*Mawsūʿa Kubrā* 8 vol. + *Iškāliyyat al-taḥayyuz* 7 vol.
+ *Mawsūʿa al-mafāhīm*).

★ = ouvrages-pivots à traiter en priorité (rangs 41, 52, 56, 72).

### 3.6. Paratexte sur le corpus déjà clôturé — `parallèle`

Indépendant des extractions archive.org, peut tourner en arrière-plan.

- [ ] Repasse de cohérence Vol. II (gabarit, glossaire, lot 276).
- [ ] Audit OCR rétroactif (errata centralisé).
- [ ] PDF unique du Vol. II (concat 289 PDF via `pypdf`).
- [ ] PDF unique du Vol. I, des Vol. 57/58/59.
- [ ] Site statique de lecture (`corpus.html`).
- [ ] Index thématique transversal Vol. I + Vol. II.
- [ ] Glossaire encyclopédique autonome.
- [ ] Préface du traducteur.

---

## 4. Volumétrie globale

| Borne du tri par effort | Ouvrages | Lots cumul. |
|-------------------------|---------:|-----------:|
| Périmètre clôturé (55, 56, 57, 58, 59) | 6 | 398 (fait) |
| Rangs 1-11 (≤ 10 lots / ouvrage) | 11 | +89 |
| Rangs 12-21 (≤ 35 lots / ouvrage) | 10 | +200 |
| Rang 22 — *Iškāliyyat al-taḥayyuz* (7 vol.) | 7 | +730 |
| Rang 23 — *Mawsūʿa kubrā* (8 vol.) | 8 | +1 350 |
| **Total restant à traduire** | **~80 PDF** | **~2 369 lots** |

À cadence de 5 lots / batch et ~10 batches / heure d'horloge utile :
**les rangs 1-21 (~289 lots) ≈ 6 heures d'orchestration**, soit l'équivalent
d'une session dense comme celle qui a clôturé le Vol. II.

---

## 5. Prochaine action recommandée

Suivre l'ordre de la table § 3.2 (du plus léger au plus lourd) :

1. **Écrire `scripts/ia_extract.py`** (parser djvu.xml → texte brut).
2. **Tester sur le rang 1** : *Min al-intifāḍa ilā ḥarb al-taḥrīr* (5 lots).
3. **Bootstrap `koutoub/60-min-al-intifada/`** + premier batch.
4. Dérouler les rangs 2-11 (89 lots cumulés).
5. Marquer une pause d'audit qualité avant de basculer sur les rangs 12+.

---

## 6. Hors périmètre (rappel)

- *Inhiyār Isrāʾīl min al-dākhil* (1 PDF sans OCR sur archive.org) :
  attendre une OCRisation manuelle ou un autre dépôt.
- Tout ouvrage non présent dans `Almissiri_Abdel_wahab` ni dans
  `koutoub/` reste hors périmètre tant qu'aucune source OCR n'est
  fournie.

---

## 7. Pipeline (rappel)

```
[Bootstrap d'un nouvel ouvrage]
ia download Almissiri_Abdel_wahab "TITRE_djvu.xml" "TITRE.pdf"
  → references/source-original.pdf
djvuxml_to_text → source/source.txt
README + CHANGELOG + scripts + gitignore + git init

[Traduction en lots]
Read source par chunks 60-90 lignes
  → 5 agents general-purpose en parallèle (run_in_background)
  → Chrome --headless --print-to-pdf
  → git add + commit + tag TAG-V0.NNN-LOTNNN
  → push origin main + push --tags
  → afplay Glass.aiff
```

Cadence : 5 lots / batch ; gabarit Cormorant Garamond + Amiri,
palette ink/paper/rule/accent ; footer
`Source ~ ligne XXXX / TOTAL`.

---

*plan.md · Corpus al-Massīrī · maj 2026-04-27 · périmètre archive.org*
