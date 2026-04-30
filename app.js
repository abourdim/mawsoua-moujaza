/* خطب الغزالي في شؤون الدين والحياة — GHAZALI'S SERMONS — app.js v3.0 */
/* Based on "Khutab al-Ghazali fi Shu'un al-Din wal-Hayah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
// Per-book data injected via data.js → window.BOOK_T / BOOK_CARDS / BOOK_QUIZ / BOOK_ABOUT
const T = window.BOOK_T || {
  ar: {
    appTitle: 'خطب الغزالي',
    splashSub: 'خطب في شؤون الدين والحياة للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة إبراهيم ١٤: ٤',
    tabHome: 'الرئيسية', tabCards: 'الخطب', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'خطب الشيخ الغزالي',
    cardsDesc: '٢٠ خطبة في شؤون الدين والحياة — كل خطبة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن خطب الشيخ الغزالي — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي مع الخطب',
    progressDesc: 'تقدمك وإنجازاتك في رحلة الخطب',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية مأثورة',
    dailyLabel: '✨ خطبة اليوم',
    searchPlaceholder: 'ابحث في الخطب...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ خطبة من كتاب خطب الغزالي',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: "Ghazali's Sermons",
    splashSub: 'Sermons on faith and life for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Ibrahim 14:4',
    tabHome: 'Home', tabCards: 'Sermons', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: "Sheikh al-Ghazali's Sermons",
    cardsDesc: '20 sermons on faith and life — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: "Test your knowledge of Sheikh al-Ghazali's sermons — 4 choices per question",
    progressTitle: 'My Sermon Journey',
    progressDesc: 'Your progress and achievements in the sermon journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Prophetic Duas',
    dailyLabel: "✨ Today's Sermon",
    searchPlaceholder: 'Search sermons...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      "20 sermons from Ghazali's Sermons on Faith and Life",
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Les Sermons de Ghazali',
    splashSub: 'Sermons sur la foi et la vie pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Ibrahim 14:4',
    tabHome: 'Accueil', tabCards: 'Sermons', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    cardsTitle: 'Les Sermons du Sheikh al-Ghazali',
    cardsDesc: '20 sermons sur la foi et la vie — chacun avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur les sermons du Sheikh al-Ghazali — 4 choix par question',
    progressTitle: 'Mon Parcours des Sermons',
    progressDesc: 'Vos progrès et réalisations dans le parcours des sermons',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas Prophétiques',
    dailyLabel: '✨ Sermon du Jour',
    searchPlaceholder: 'Rechercher les sermons...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 sermons du livre Les Sermons de Ghazali',
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ CARDS DATA (overridable via data.js) ═══════════════
const CARDS = window.BOOK_CARDS || [
  {
    id:1, emoji:'🕌',
    ar:{title:'خطبة الإيمان والعمل',desc:'يقول الغزالي في خطبه: الإيمان ليس كلمة تُقال باللسان فقط بل هو تصديق بالقلب وعمل بالجوارح وتطبيق في كل مناحي الحياة. المسلم الحق يجمع بين الإيمان والعمل الصالح فلا ينفصل أحدهما عن الآخر. لا قيمة لإيمان لا يُترجم إلى سلوك حسن ومعاملة طيبة مع الناس وخدمة المجتمع والدفاع عن الحق. الإيمان شجرة جذورها في القلب وثمارها في السلوك اليومي والأخلاق العملية. يؤكد الغزالي أن كثيراً من المسلمين يعيشون انفصاماً بين إيمانهم وسلوكهم وأن هذا من أخطر أمراض الأمة. الإيمان الحقيقي يدفع صاحبه للعمل والبذل والتضحية والعطاء.',verse:'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ',verseRef:'التوبة ١٠٥',hadith:'الإيمان ما وقر في القلب وصدقه العمل — رواه أحمد',action:'اجعل إيمانك عملاً اليوم: ساعد شخصاً محتاجاً أو تصدق أو ابتسم في وجه أخيك',young:'الإيمان مثل الشجرة — جذورها في القلب وثمارها في الأعمال الطيبة! ازرع شجرتك اليوم 🕌'},
    en:{title:'Sermon on Faith and Action',desc:'Al-Ghazali says in his sermons: Faith is not merely a word spoken by the tongue — it is belief in the heart confirmed by action and applied in every aspect of life. A true Muslim combines faith with righteous deeds so that one never separates from the other. Faith without good behavior, kind treatment of people, service to community, and standing for justice has no value. Faith is a tree whose roots are in the heart and whose fruits are in daily conduct and practical ethics. Ghazali emphasizes that many Muslims live a disconnect between their faith and behavior, and that this is one of the most dangerous diseases of the nation. True faith drives its owner to work, give, sacrifice, and contribute.',verse:'And say: Work, for Allah will see your work, and His Messenger, and the believers',verseRef:'At-Tawbah 105',hadith:'Faith is what settles in the heart and is confirmed by action — Ahmad',action:'Turn your faith into action today: help someone in need, give charity, or smile at a fellow human',young:'Faith is like a tree — its roots are in the heart and its fruits are good deeds! Plant your tree today 🕌'},
    fr:{title:'Sermon sur la Foi et l\'Action',desc:"La foi n'est pas simplement un mot prononcé — c'est une croyance dans le coeur confirmée par l'action et appliquée dans chaque aspect de la vie. Un vrai musulman allie foi et bonnes actions de sorte que l'une ne se sépare jamais de l'autre. Une foi sans bon comportement, sans service à la communauté et sans défense de la justice n'a aucune valeur. Ghazali souligne que beaucoup de musulmans vivent une déconnexion entre leur foi et leur comportement, et que c'est l'une des maladies les plus dangereuses de la nation.",verse:'Et dis : Oeuvrez, car Allah verra votre oeuvre, ainsi que Son Messager et les croyants',verseRef:'At-Tawbah 105',hadith:"La foi est ce qui s'installe dans le coeur et est confirmé par l'action — Ahmad",action:"Transformez votre foi en action aujourd'hui : aidez quelqu'un, donnez la charité ou souriez",young:"La foi est comme un arbre — ses racines sont dans le coeur et ses fruits sont les bonnes actions ! 🕌"}
  },
  {
    id:2, emoji:'⚖️',
    ar:{title:'خطبة العدل',desc:'يقول الغزالي في خطبه: العدل أساس الحكم في الإسلام. بدون عدل ينهار المجتمع وتضيع الحقوق. المسلم يعدل حتى مع من يكره، ويشهد بالحق حتى على نفسه. العدل ليس مجرد قانون بل هو خُلق يتخلق به المسلم في كل أحواله.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ وَلَوْ عَلَى أَنْفُسِكُمْ',verseRef:'النساء ١٣٥',hadith:'اتقوا الظلم فإن الظلم ظلمات يوم القيامة — رواه مسلم',action:'كن عادلاً اليوم في كل تعاملاتك — لا تحكم على أحد قبل أن تسمع الطرفين',young:'كن عادلاً مع الجميع! حتى لو لم يكن الشخص صديقك — العدل يجعل العالم أجمل ⚖️'},
    en:{title:'Sermon on Justice',desc:'Al-Ghazali says in his sermons: Justice is the foundation of governance in Islam. Without justice, society collapses and rights are lost. A Muslim is just even with those they dislike, and bears witness to truth even against themselves.',verse:'O you who believe, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves',verseRef:'An-Nisa 135',hadith:'Beware of injustice, for it will be darkness on the Day of Judgment — Muslim',action:'Be just today in all your dealings — do not judge anyone before hearing both sides',young:'Be fair with everyone! Even if they are not your friend — justice makes the world more beautiful ⚖️'},
    fr:{title:'Sermon sur la Justice',desc:"La justice est le fondement de la gouvernance en Islam. Sans justice, la société s'effondre. Le musulman est juste même avec ceux qu'il n'aime pas et témoigne de la vérité même contre lui-même.",verse:'Ô vous qui croyez, soyez fermement attachés à la justice, témoins pour Allah, même contre vous-mêmes',verseRef:'An-Nisa 135',hadith:"Gardez-vous de l'injustice, car elle sera des ténèbres au Jour du Jugement — Muslim",action:"Soyez juste aujourd'hui dans toutes vos affaires — n'émettez pas de jugement sans entendre les deux parties",young:"Sois juste avec tout le monde ! Même si ce n'est pas ton ami — la justice rend le monde plus beau ⚖️"}
  },
  {
    id:3, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'خطبة الأسرة',desc:'يقول الغزالي في خطبه: الأسرة هي اللبنة الأولى في بناء المجتمع. المسلم يبني أسرته على المودة والرحمة والتعاون. تربية الأبناء أمانة عظيمة تحتاج إلى صبر وعلم وحكمة. البيت المسلم مدرسة تخرّج أجيالاً صالحة.',verse:'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً',verseRef:'الروم ٢١',hadith:'خيركم خيركم لأهله وأنا خيركم لأهلي — رواه الترمذي',action:'أظهر حبك لعائلتك اليوم: قل كلمة طيبة لوالديك وساعد إخوتك',young:'عائلتك كنز! قل لأمك وأبيك "أحبكما" وساعد إخوتك — البيت السعيد يبدأ منك 👨‍👩‍👧‍👦'},
    en:{title:'Sermon on Family',desc:'Al-Ghazali says in his sermons: The family is the first building block of society. A Muslim builds their family on love, mercy, and cooperation. Raising children is a great trust that requires patience, knowledge, and wisdom.',verse:'And among His signs is that He created for you mates that you may find tranquility in them, and He placed between you affection and mercy',verseRef:'Ar-Rum 21',hadith:'The best of you is the best to their family, and I am the best to my family — Tirmidhi',action:'Show love to your family today: say kind words to your parents and help your siblings',young:'Your family is a treasure! Tell your mom and dad "I love you" and help your siblings 👨‍👩‍👧‍👦'},
    fr:{title:'Sermon sur la Famille',desc:"La famille est la première pierre angulaire de la société. Le musulman construit sa famille sur l'amour, la miséricorde et la coopération. Élever des enfants est une grande responsabilité qui demande patience et sagesse.",verse:"Et parmi Ses signes, Il a créé pour vous des épouses afin que vous trouviez la tranquillité auprès d'elles, et Il a mis entre vous affection et miséricorde",verseRef:'Ar-Rum 21',hadith:'Le meilleur d\'entre vous est celui qui est le meilleur avec sa famille — Tirmidhi',action:"Montrez votre amour à votre famille aujourd'hui : dites un mot gentil à vos parents",young:"Ta famille est un trésor ! Dis à tes parents « Je vous aime » et aide tes frères et soeurs 👨‍👩‍👧‍👦"}
  },
  {
    id:4, emoji:'📚',
    ar:{title:'خطبة العلم',desc:'يقول الغزالي في خطبه: العلم فريضة في الإسلام. الأمة التي تهمل العلم تتخلف وتضعف. العلم ليس فقط العلم الشرعي بل كل علم نافع يخدم البشرية. المسلم يطلب العلم من المهد إلى اللحد ويسعى للتميز في كل مجال.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً اليوم: اقرأ كتاباً أو شاهد درساً مفيداً أو اسأل عالماً',young:'العلم كنز لا يُسرق! تعلم شيئاً جديداً كل يوم واسأل أسئلة ذكية 📚'},
    en:{title:'Sermon on Knowledge',desc:'Al-Ghazali says in his sermons: Seeking knowledge is an obligation in Islam. A nation that neglects knowledge falls behind and weakens. Knowledge is not just religious knowledge but every beneficial science that serves humanity.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new today: read a book, watch a useful lesson, or ask a knowledgeable person',young:'Knowledge is a treasure that cannot be stolen! Learn something new every day and ask smart questions 📚'},
    fr:{title:'Sermon sur le Savoir',desc:"La quête du savoir est une obligation en Islam. Une nation qui néglige le savoir s'affaiblit. Le savoir n'est pas seulement religieux mais toute science utile à l'humanité.",verse:'Dis : Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quiconque emprunte un chemin à la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:"Apprenez quelque chose de nouveau aujourd'hui : lisez un livre ou posez une question à un savant",young:"Le savoir est un trésor qu'on ne peut voler ! Apprends quelque chose de nouveau chaque jour 📚"}
  },
  {
    id:5, emoji:'🏔️',
    ar:{title:'خطبة الصبر',desc:'الصبر ركيزة الإيمان. يخطب الغزالي عن أن الحياة مليئة بالابتلاءات ولا يجتازها إلا الصابرون. الصبر ليس الاستسلام بل هو المقاومة الذكية والثبات على الحق مهما اشتدت المحن.',verse:'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ',verseRef:'الزمر ١٠',hadith:'عجباً لأمر المؤمن إن أمره كله خير — رواه مسلم',action:'عندما تواجه صعوبة اليوم، تذكر أن الصبر قوة وأن الفرج قريب',young:'الصبر قوة خارقة! مثل البطل الذي لا يستسلم أبداً — كن صبوراً وستنجح 🏔️'},
    en:{title:'Sermon on Patience',desc:'Patience is the pillar of faith. Ghazali preaches that life is full of trials and only the patient can pass through them. Patience is not surrender but intelligent resistance and steadfastness in truth no matter how tough the challenges.',verse:'The patient will be given their reward without measure',verseRef:'Az-Zumar 10',hadith:'How wonderful is the affair of the believer, for all of it is good — Muslim',action:'When you face difficulty today, remember that patience is strength and relief is near',young:'Patience is a superpower! Like a hero who never gives up — be patient and you will succeed 🏔️'},
    fr:{title:'Sermon sur la Patience',desc:"La patience est le pilier de la foi. Ghazali prêche que la vie est pleine d'épreuves et seuls les patients les traversent. La patience n'est pas la soumission mais la résistance intelligente et la fermeté sur la vérité.",verse:'Les patients recevront leur récompense sans mesure',verseRef:'Az-Zumar 10',hadith:'Comme l\'affaire du croyant est merveilleuse, car tout est bon pour lui — Muslim',action:"Quand vous faites face à une difficulté aujourd'hui, rappelez-vous que la patience est une force",young:"La patience est un super-pouvoir ! Comme un héros qui n'abandonne jamais — sois patient et tu réussiras 🏔️"}
  },
  {
    id:6, emoji:'🌻',
    ar:{title:'خطبة الشكر',desc:'يقول الغزالي في خطبه: الشكر عبادة عظيمة وخُلق نبيل. من شكر الله على نعمه زاده الله خيراً. الشيخ الغزالي يحث على شكر الله في السراء والضراء والنظر إلى من هو أقل منك لتعرف قدر النعمة.',verse:'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'إبراهيم ٧',hadith:'انظروا إلى من هو أسفل منكم ولا تنظروا إلى من هو فوقكم — متفق عليه',action:'اكتب ٥ نعم تشكر الله عليها الآن — وقل الحمد لله بقلبك قبل لسانك',young:'قل الحمد لله كل يوم! اكتب ٣ أشياء جميلة في حياتك واشكر الله عليها 🌻'},
    en:{title:'Sermon on Gratitude',desc:'Al-Ghazali says in his sermons: Gratitude is a great act of worship and a noble character trait. Whoever thanks God for His blessings, God increases them in goodness. Sheikh al-Ghazali urges gratitude in ease and hardship.',verse:'If you are grateful, I will surely increase you',verseRef:'Ibrahim 7',hadith:'Look at those below you and do not look at those above you — Agreed upon',action:'Write 5 blessings you are grateful for right now — and say Alhamdulillah from your heart',young:'Say Alhamdulillah every day! Write 3 beautiful things in your life and thank God for them 🌻'},
    fr:{title:'Sermon sur la Gratitude',desc:"La gratitude est une grande adoration et un noble trait de caractère. Celui qui remercie Dieu pour Ses bienfaits, Dieu l'augmente en bien. Le Sheikh al-Ghazali exhorte à la gratitude dans l'aisance et la difficulté.",verse:'Si vous êtes reconnaissants, Je vous augmenterai certainement',verseRef:'Ibrahim 7',hadith:'Regardez ceux qui sont en dessous de vous et non ceux qui sont au-dessus — Unanimement reconnu',action:'Écrivez 5 bienfaits dont vous êtes reconnaissants maintenant — et dites Alhamdulillah',young:"Dis Alhamdulillah chaque jour ! Écris 3 belles choses dans ta vie et remercie Dieu 🌻"}
  },
  {
    id:7, emoji:'🤝',
    ar:{title:'خطبة الوحدة',desc:'الوحدة قوة والفرقة ضعف. يدعو الغزالي إلى وحدة الأمة الإسلامية ونبذ الخلافات المذهبية والعرقية. الإسلام يجمع ولا يفرق ويدعو إلى التعاون على البر والتقوى.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',hadith:'المؤمن للمؤمن كالبنيان يشد بعضه بعضاً — متفق عليه',action:'تواصل مع شخص مختلف عنك اليوم — ابحث عما يجمعكم لا عما يفرقكم',young:'الوحدة قوة! مثل أصابع اليد — كل إصبع وحده ضعيف لكن معاً يصنعون قبضة قوية 🤝'},
    en:{title:'Sermon on Unity',desc:'Unity is strength and division is weakness. Ghazali calls for the unity of the Muslim nation and the rejection of sectarian and ethnic divisions. Islam unites and does not divide.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Al Imran 103',hadith:'A believer to another believer is like a building whose parts support each other — Agreed upon',action:'Connect with someone different from you today — look for what unites you, not what divides you',young:'Unity is strength! Like fingers of a hand — each finger alone is weak but together they make a strong fist 🤝'},
    fr:{title:'Sermon sur l\'Unité',desc:"L'unité est une force et la division est une faiblesse. Ghazali appelle à l'unité de la nation musulmane et au rejet des divisions sectaires et ethniques. L'Islam unit et ne divise pas.",verse:'Et cramponnez-vous tous ensemble au câble d\'Allah et ne soyez pas divisés',verseRef:'Al Imran 103',hadith:'Le croyant pour le croyant est comme un édifice dont les parties se soutiennent — Unanimement reconnu',action:"Connectez-vous avec quelqu'un de différent aujourd'hui — cherchez ce qui vous unit",young:"L'unité c'est la force ! Comme les doigts d'une main — chaque doigt seul est faible mais ensemble ils font un poing fort 🤝"}
  },
  {
    id:8, emoji:'📖',
    ar:{title:'خطبة القرآن',desc:'القرآن الكريم دستور المسلمين ومنهج حياتهم. يحث الغزالي على تدبر القرآن وفهمه وتطبيقه لا مجرد تلاوته بالألسنة. القرآن جاء ليُغيّر حياتنا ويهدينا إلى الصراط المستقيم.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَى قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٢٤',hadith:'خيركم من تعلم القرآن وعلمه — رواه البخاري',action:'اقرأ صفحة من القرآن اليوم وتأمل معناها — واسأل نفسك: كيف أطبق هذا في حياتي؟',young:'القرآن رسالة من الله إليك! اقرأ آية كل يوم وحاول أن تفهمها وتعمل بها 📖'},
    en:{title:'Sermon on the Quran',desc:'The Holy Quran is the constitution and way of life for Muslims. Ghazali urges reflection on the Quran, understanding it, and applying it — not merely reciting it. The Quran came to change our lives and guide us to the straight path.',verse:'Do they not reflect upon the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 24',hadith:'The best of you is the one who learns the Quran and teaches it — Bukhari',action:'Read a page of the Quran today and reflect on its meaning — ask yourself: how can I apply this?',young:'The Quran is a message from God to you! Read a verse every day and try to understand it and act on it 📖'},
    fr:{title:'Sermon sur le Coran',desc:"Le Saint Coran est la constitution et le mode de vie des musulmans. Ghazali exhorte à la réflexion sur le Coran, à sa compréhension et à son application — pas simplement à sa récitation.",verse:'Ne méditent-ils pas sur le Coran, ou y a-t-il des verrous sur leurs coeurs ?',verseRef:'Muhammad 24',hadith:'Le meilleur d\'entre vous est celui qui apprend le Coran et l\'enseigne — Bukhari',action:"Lisez une page du Coran aujourd'hui et méditez sur son sens — demandez-vous : comment l'appliquer ?",young:"Le Coran est un message de Dieu pour toi ! Lis un verset chaque jour et essaie de le comprendre 📖"}
  },
  {
    id:9, emoji:'🌟',
    ar:{title:'خطبة أخلاق النبي ﷺ',desc:'النبي ﷺ هو القدوة الأعلى في الأخلاق. كان خُلقه القرآن. يستعرض الغزالي صفات النبي ﷺ من رحمة وتواضع وعدل وشجاعة وكرم ويدعو الأمة للاقتداء به في كل جوانب الحياة.',verse:'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',verseRef:'الأحزاب ٢١',hadith:'إنما بُعثت لأتمم مكارم الأخلاق — رواه أحمد',action:'تعرّف على صفة من صفات النبي ﷺ اليوم وحاول تطبيقها في حياتك',young:'النبي ﷺ كان أجمل الناس خُلقاً! تعلم من أخلاقه وحاول أن تكون مثله 🌟'},
    en:{title:"Sermon on the Prophet's Character",desc:'The Prophet (PBUH) is the highest model of moral character. His character was the Quran. Ghazali reviews the Prophet\'s qualities — mercy, humility, justice, courage, and generosity — and calls the nation to follow his example.',verse:'There has certainly been for you in the Messenger of Allah an excellent example',verseRef:'Al-Ahzab 21',hadith:'I was only sent to perfect noble character — Ahmad',action:'Learn about one of the Prophet\'s qualities today and try to apply it in your life',young:'The Prophet (PBUH) had the most beautiful character! Learn from his manners and try to be like him 🌟'},
    fr:{title:'Sermon sur le Caractère du Prophète',desc:"Le Prophète (PSL) est le modèle suprême de caractère moral. Son caractère était le Coran. Ghazali passe en revue les qualités du Prophète — miséricorde, humilité, justice, courage et générosité.",verse:'Vous avez certes dans le Messager d\'Allah un excellent exemple',verseRef:'Al-Ahzab 21',hadith:"Je n'ai été envoyé que pour parfaire les nobles caractères — Ahmad",action:"Apprenez une qualité du Prophète aujourd'hui et essayez de l'appliquer dans votre vie",young:"Le Prophète (PSL) avait le plus beau caractère ! Apprends de ses manières et essaie de lui ressembler 🌟"}
  },
  {
    id:10, emoji:'🏗️',
    ar:{title:'خطبة المسؤولية الاجتماعية',desc:'المسلم مسؤول عن مجتمعه. لا يكفي أن تكون صالحاً في نفسك بل يجب أن تُصلح من حولك. الشيخ الغزالي يحث على المشاركة في بناء المجتمع ومحاربة الفساد والأمر بالمعروف والنهي عن المنكر.',verse:'كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنْكَرِ',verseRef:'آل عمران ١١٠',hadith:'كلكم راع وكلكم مسؤول عن رعيته — متفق عليه',action:'ساهم في خدمة مجتمعك اليوم: نظف مكانك العام أو ساعد جارك أو تطوع',young:'أنت مسؤول عن مجتمعك! ساعد جيرانك ونظف حيّك وكن مواطناً صالحاً 🏗️'},
    en:{title:'Sermon on Social Responsibility',desc:'A Muslim is responsible for their community. It is not enough to be righteous yourself — you must also reform those around you. Sheikh al-Ghazali urges participation in building society and fighting corruption.',verse:'You are the best nation produced for mankind, commanding good and forbidding evil',verseRef:'Al Imran 110',hadith:'Each of you is a shepherd and each is responsible for their flock — Agreed upon',action:'Contribute to your community today: clean your public space, help a neighbor, or volunteer',young:'You are responsible for your community! Help your neighbors, clean your area, and be a good citizen 🏗️'},
    fr:{title:'Sermon sur la Responsabilité Sociale',desc:"Le musulman est responsable de sa communauté. Il ne suffit pas d'être vertueux soi-même — il faut aussi réformer ceux qui nous entourent. Le Sheikh al-Ghazali exhorte à la participation dans la construction de la société.",verse:'Vous êtes la meilleure nation suscitée pour les gens, vous ordonnez le bien et interdisez le mal',verseRef:'Al Imran 110',hadith:'Chacun de vous est un berger et chacun est responsable de son troupeau — Unanimement reconnu',action:"Contribuez à votre communauté aujourd'hui : nettoyez votre espace public ou aidez un voisin",young:"Tu es responsable de ta communauté ! Aide tes voisins, nettoie ton quartier et sois un bon citoyen 🏗️"}
  },
  {
    id:11, emoji:'🧑‍🎓',
    ar:{title:'خطبة الشباب',desc:'الشباب هم عماد الأمة ومستقبلها. يوجه الغزالي نصائحه للشباب ليكونوا أقوياء في إيمانهم وعلمهم وأخلاقهم. الشباب المسلم يجمع بين الدين والعلم والعمل ولا يضيع وقته في التفاهات.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُمْ بِالْحَقِّ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى',verseRef:'الكهف ١٣',hadith:'سبعة يظلهم الله في ظله يوم لا ظل إلا ظله: شاب نشأ في عبادة الله — متفق عليه',action:'استثمر وقتك اليوم في شيء مفيد: ادرس أو تعلم مهارة جديدة أو ساعد أهلك',young:'أنت شاب مميز! استثمر وقتك في التعلم واللعب المفيد وبناء مستقبلك الرائع 🧑‍🎓'},
    en:{title:'Sermon on Youth',desc:'Youth are the backbone and future of the nation. Ghazali directs his advice to young people to be strong in their faith, knowledge, and character. Muslim youth combine religion, knowledge, and work.',verse:'We relate to you their story in truth. Indeed, they were youths who believed in their Lord, and We increased them in guidance',verseRef:'Al-Kahf 13',hadith:'Seven will be shaded by Allah on the day when there is no shade but His: a youth who grew up in the worship of Allah — Agreed upon',action:'Invest your time today in something useful: study, learn a new skill, or help your family',young:'You are an amazing young person! Invest your time in learning, useful activities, and building your awesome future 🧑‍🎓'},
    fr:{title:'Sermon sur la Jeunesse',desc:"La jeunesse est le pilier et l'avenir de la nation. Ghazali dirige ses conseils aux jeunes pour être forts dans leur foi, leur savoir et leur caractère.",verse:'Nous te racontons leur histoire en vérité. Ce sont des jeunes qui croyaient en leur Seigneur',verseRef:'Al-Kahf 13',hadith:"Sept seront ombragés par Allah le jour où il n'y aura pas d'ombre sauf la Sienne : un jeune qui a grandi dans l'adoration d'Allah — Unanimement reconnu",action:"Investissez votre temps aujourd'hui dans quelque chose d'utile : étudiez ou apprenez une compétence",young:"Tu es un jeune formidable ! Investis ton temps dans l'apprentissage et la construction de ton avenir 🧑‍🎓"}
  },
  {
    id:12, emoji:'👩',
    ar:{title:'خطبة حقوق المرأة',desc:'الإسلام كرّم المرأة وأعطاها حقوقها كاملة. الشيخ الغزالي يدافع عن حق المرأة في التعليم والعمل والمشاركة في بناء المجتمع. ظلم المرأة باسم الدين جريمة والإسلام بريء من كل عادات الجاهلية.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢٢٨',hadith:'استوصوا بالنساء خيراً — متفق عليه',action:'احترم النساء في حياتك: أمك وأختك وزميلتك — ودافع عن حقوقهن',young:'الإسلام يحترم المرأة! احترم أمك وأختك وكل فتاة — الجميع متساوون في الكرامة 👩'},
    en:{title:"Sermon on Women's Rights",desc:"Islam honored women and gave them full rights. Sheikh al-Ghazali defends women's right to education, work, and participation in building society. Oppressing women in the name of religion is a crime.",verse:'And women have rights similar to those over them in a fair manner',verseRef:'Al-Baqarah 228',hadith:'Treat women well — Agreed upon',action:'Respect the women in your life: your mother, sister, and colleague — and defend their rights',young:'Islam respects women! Respect your mom, your sister, and every girl — everyone is equal in dignity 👩'},
    fr:{title:'Sermon sur les Droits des Femmes',desc:"L\'Islam a honoré la femme et lui a donné tous ses droits. Le Sheikh al-Ghazali défend le droit de la femme à l'éducation, au travail et à la participation dans la société.",verse:'Et elles ont des droits similaires à ceux exercés sur elles, de manière convenable',verseRef:'Al-Baqarah 228',hadith:'Traitez les femmes avec bonté — Unanimement reconnu',action:"Respectez les femmes dans votre vie : votre mère, votre soeur — et défendez leurs droits",young:"L'Islam respecte les femmes ! Respecte ta maman, ta soeur et chaque fille — tous sont égaux en dignité 👩"}
  },
  {
    id:13, emoji:'💎',
    ar:{title:'خطبة الإخلاص',desc:'الإخلاص روح العبادة والعمل. بدونه تصبح الأعمال جوفاء بلا قيمة. الغزالي يحذر من الرياء والنفاق ويحث على إخلاص النية لله في كل عمل — سواء كان عبادة أو دراسة أو عملاً يومياً.',verse:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',verseRef:'البينة ٥',hadith:'إنما الأعمال بالنيات — متفق عليه',action:'جدد نيتك في كل عمل تقوم به اليوم — واسأل نفسك: هل أفعل هذا لله أم للناس؟',young:'افعل الخير لأجل الله! لا تفعل الأشياء الجيدة ليراك الناس فقط — الله يرى كل شيء 💎'},
    en:{title:'Sermon on Sincerity',desc:'Sincerity is the soul of worship and work. Without it, deeds become hollow and worthless. Ghazali warns against showing off and hypocrisy and urges sincere intention for God in every action.',verse:'They were only commanded to worship Allah with sincerity in religion',verseRef:'Al-Bayyinah 5',hadith:'Actions are but by intentions — Agreed upon',action:'Renew your intention in everything you do today — ask yourself: am I doing this for God or for people?',young:'Do good for the sake of God! Do not do good things just so people will see you — God sees everything 💎'},
    fr:{title:'Sermon sur la Sincérité',desc:"La sincérité est l'âme de l'adoration et du travail. Sans elle, les actions deviennent creuses et sans valeur. Ghazali met en garde contre l'ostentation et l'hypocrisie.",verse:"Ils n'ont été commandés que d'adorer Allah en Lui vouant un culte sincère",verseRef:'Al-Bayyinah 5',hadith:'Les actes ne valent que par les intentions — Unanimement reconnu',action:"Renouvelez votre intention dans tout ce que vous faites aujourd'hui — faites-le pour Dieu",young:"Fais le bien pour Dieu ! Ne fais pas de bonnes choses juste pour que les gens te voient — Dieu voit tout 💎"}
  },
  {
    id:14, emoji:'🌅',
    ar:{title:'خطبة الأمل',desc:'الأمل في الله محرك الحياة. الشيخ الغزالي يرفض اليأس والتشاؤم ويدعو إلى التفاؤل والعمل. مهما اشتدت الأزمات فإن فرج الله قريب. المسلم لا ييأس أبداً من رحمة الله.',verse:'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا',verseRef:'الشرح ٥-٦',hadith:'لا تيأسوا من رحمة الله — حديث حسن',action:'ابدأ يومك بالأمل والتفاؤل — واعمل لتحقيق أحلامك ولا تستسلم للإحباط',young:'كن متفائلاً دائماً! بعد كل ليلة مظلمة يأتي صباح جميل مليء بالنور 🌅'},
    en:{title:'Sermon on Hope',desc:'Hope in God is the driving force of life. Sheikh al-Ghazali rejects despair and pessimism and calls for optimism and action. No matter how severe the crises, God\'s relief is near.',verse:'For indeed, with hardship comes ease. Indeed, with hardship comes ease',verseRef:'Ash-Sharh 5-6',hadith:'Do not despair of God\'s mercy — Hasan hadith',action:'Start your day with hope and optimism — work to achieve your dreams and do not surrender to frustration',young:'Always be optimistic! After every dark night comes a beautiful morning full of light 🌅'},
    fr:{title:"Sermon sur l'Espoir",desc:"L'espoir en Dieu est le moteur de la vie. Le Sheikh al-Ghazali rejette le désespoir et le pessimisme et appelle à l'optimisme et à l'action.",verse:'Certes, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité',verseRef:'Ash-Sharh 5-6',hadith:'Ne désespérez pas de la miséricorde de Dieu — Hadith Hasan',action:"Commencez votre journée avec espoir et optimisme — travaillez pour réaliser vos rêves",young:"Sois toujours optimiste ! Après chaque nuit sombre vient un beau matin plein de lumière 🌅"}
  },
  {
    id:15, emoji:'🕊️',
    ar:{title:'خطبة الآخرة',desc:'الدنيا دار ممر والآخرة دار مقر. يذكّر الغزالي بأن الحياة قصيرة وأن الاستعداد للآخرة واجب. ليس معنى ذلك ترك الدنيا بل العمل فيها مع تذكر أن الحساب قادم وأن كل عمل مكتوب.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ',verseRef:'آل عمران ١٨٥',hadith:'كن في الدنيا كأنك غريب أو عابر سبيل — رواه البخاري',action:'تذكر الآخرة اليوم وأصلح علاقتك بالله — صلِّ صلواتك وتصدق واستغفر',young:'هذه الحياة رحلة قصيرة! اجمع فيها أكبر عدد من الحسنات لتكون سعيداً يوم القيامة 🕊️'},
    en:{title:'Sermon on the Afterlife',desc:'This world is a passage and the Hereafter is the permanent abode. Ghazali reminds us that life is short and preparing for the Hereafter is a duty. This does not mean abandoning the world but working in it while remembering accountability.',verse:'Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection',verseRef:'Al Imran 185',hadith:'Be in this world as if you were a stranger or a traveler — Bukhari',action:'Remember the Hereafter today and fix your relationship with God — pray, give charity, and seek forgiveness',young:'This life is a short journey! Collect as many good deeds as you can to be happy on the Day of Judgment 🕊️'},
    fr:{title:"Sermon sur l'Au-delà",desc:"Ce monde est un passage et l'Au-delà est la demeure permanente. Ghazali rappelle que la vie est courte et que la préparation pour l'Au-delà est un devoir.",verse:'Toute âme goûtera la mort et vous ne recevrez votre rétribution que le Jour de la Résurrection',verseRef:'Al Imran 185',hadith:'Sois dans ce monde comme un étranger ou un voyageur — Bukhari',action:"Rappelez-vous l'Au-delà aujourd'hui et améliorez votre relation avec Dieu — priez et donnez",young:"Cette vie est un court voyage ! Accumule le maximum de bonnes actions pour être heureux le Jour du Jugement 🕊️"}
  },
  {
    id:16, emoji:'🔄',
    ar:{title:'خطبة التوبة',desc:'التوبة باب مفتوح لا يُغلق أبداً ما دام الإنسان حياً. يخطب الغزالي عن التوبة بوصفها عودة إلى الله بعد الذنب والخطيئة، وأنها ليست ضعفاً بل قوة وشجاعة. الله يفرح بتوبة عبده أشد من فرحة أحدكم إذا وجد ضالته في الصحراء. التوبة ليست مجرد استغفار باللسان بل هي ندم صادق في القلب وعزم على عدم العودة للذنب وإصلاح ما يمكن إصلاحه. التائب من الذنب كمن لا ذنب له، وباب الرحمة الإلهية أوسع من كل المعاصي. يحث الغزالي على التوبة الفورية وعدم التسويف لأن الموت يأتي بغتة والعمر قصير. يؤكد أن الله يقبل توبة العبد ما لم يغرغر — أي ما لم تصل الروح إلى الحلقوم.',verse:'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا',verseRef:'الزمر ٥٣',hadith:'التائب من الذنب كمن لا ذنب له — رواه ابن ماجه',action:'تُب إلى الله اليوم من ذنب تعرفه واعزم على ألا تعود إليه — لا تؤجل التوبة أبداً',young:'الله يحبك ويقبل توبتك دائماً! إذا أخطأت قل "أستغفر الله" وعُد إلى الطريق الصحيح 🔄'},
    en:{title:'Sermon on Repentance',desc:'Repentance is a door that never closes as long as a person is alive. Ghazali preaches about repentance as a return to God after sin, and that it is not weakness but strength and courage. God rejoices at the repentance of His servant more than a person rejoices at finding their lost camel in the desert. Repentance is not mere verbal seeking of forgiveness but sincere regret in the heart, resolve not to return to sin, and fixing what can be fixed. The one who repents from sin is like one who has no sin, and the door of divine mercy is wider than all transgressions. Ghazali urges immediate repentance without procrastination because death comes suddenly and life is short. He affirms that God accepts repentance as long as the soul has not reached the throat.',verse:'Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins',verseRef:'Az-Zumar 53',hadith:'The one who repents from sin is like one who has no sin — Ibn Majah',action:'Repent to God today from a sin you know and resolve not to return to it — never delay repentance',young:'God loves you and always accepts your repentance! If you make a mistake, say "I seek forgiveness" and return to the right path 🔄'},
    fr:{title:'Sermon sur le Repentir',desc:"Le repentir est une porte qui ne se ferme jamais tant que la personne est vivante. Ghazali prêche sur le repentir comme un retour vers Dieu après le péché, et que ce n'est pas une faiblesse mais une force et un courage. Dieu se réjouit du repentir de Son serviteur plus qu'une personne ne se réjouit de retrouver son chameau perdu dans le désert. Le repentir n'est pas un simple pardon verbal mais un regret sincère dans le coeur, une résolution de ne pas revenir au péché et la réparation de ce qui peut l'être. Celui qui se repent est comme celui qui n'a pas péché, et la porte de la miséricorde divine est plus large que toutes les transgressions. Ghazali exhorte au repentir immédiat sans procrastination car la mort vient soudainement.",verse:'Dis : Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d\'Allah. Allah pardonne tous les péchés',verseRef:'Az-Zumar 53',hadith:'Celui qui se repent du péché est comme celui qui n\'a pas péché — Ibn Majah',action:"Repentez-vous à Dieu aujourd'hui d'un péché que vous connaissez — ne retardez jamais le repentir",young:"Dieu t'aime et accepte toujours ton repentir ! Si tu fais une erreur, dis « Je demande pardon » et reviens sur le bon chemin 🔄"}
  },
  {
    id:17, emoji:'💀',
    ar:{title:'خطبة الموت',desc:'الموت حقيقة لا مهرب منها وهو أكبر واعظ للإنسان. يخطب الغزالي عن الموت ليس لبث الخوف والرعب بل لتحفيز الناس على حسن العمل والاستعداد للقاء الله. من ذكر الموت أحسن العمل وقلّل من المعصية. الموت ليس نهاية بل انتقال من دار الفناء إلى دار البقاء. المؤمن يستقبل الموت بسكينة لأنه يعلم أنه ذاهب إلى ربه الرحيم. الشيخ الغزالي كان يذكّر بأن كل يوم يمر يقرّبنا من الموت فلنملأه بالخير والعمل الصالح. كان يقول: "الموت موعظة صامتة — من تذكره أحسن العمل ومن غفل عنه غرق في الدنيا."',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ثُمَّ إِلَيْنَا تُرْجَعُونَ',verseRef:'العنكبوت ٥٧',hadith:'أكثروا ذكر هاذم اللذات — الموت — رواه الترمذي',action:'تذكر الموت اليوم لتحسن عملك — وأصلح ما بينك وبين الله وبين الناس',young:'كل يوم فرصة جديدة للخير! لا تضيع وقتك وافعل كل يوم شيئاً جميلاً تفتخر به 💀'},
    en:{title:'Sermon on Death',desc:'Death is an inescapable reality and the greatest preacher to humanity. Ghazali preaches about death not to spread fear but to motivate people toward good deeds and preparing to meet God. Whoever remembers death improves their deeds and reduces sin. Death is not an end but a transition from the abode of transience to the abode of permanence. The believer receives death with tranquility knowing they are going to their Merciful Lord. Sheikh al-Ghazali would remind that every passing day brings us closer to death, so we must fill it with goodness and righteous work. He said: "Death is a silent sermon — whoever remembers it improves their deeds and whoever forgets it drowns in worldly life."',verse:'Every soul will taste death, then to Us you will be returned',verseRef:'Al-Ankabut 57',hadith:'Frequently remember the destroyer of pleasures — death — Tirmidhi',action:'Remember death today to improve your deeds — and fix what is between you and God and between you and people',young:'Every day is a new opportunity for good! Do not waste your time and do something beautiful every day that you can be proud of 💀'},
    fr:{title:'Sermon sur la Mort',desc:"La mort est une réalité inévitable et le plus grand prédicateur pour l'humanité. Ghazali prêche sur la mort non pour répandre la peur mais pour motiver les gens aux bonnes actions et à la préparation de la rencontre avec Dieu. Celui qui se souvient de la mort améliore ses actes et réduit ses péchés. La mort n'est pas une fin mais une transition. Le croyant accueille la mort avec sérénité sachant qu'il va vers son Seigneur Miséricordieux. Le Sheikh al-Ghazali rappelait que chaque jour qui passe nous rapproche de la mort, alors remplissons-le de bien. Il disait : « La mort est un sermon silencieux — celui qui s'en souvient améliore ses actes et celui qui l'oublie se noie dans la vie mondaine. »",verse:'Toute âme goûtera la mort, puis c\'est vers Nous que vous serez ramenés',verseRef:'Al-Ankabut 57',hadith:'Rappelez-vous souvent le destructeur des plaisirs — la mort — Tirmidhi',action:"Rappelez-vous la mort aujourd'hui pour améliorer vos actes — et réparez vos relations avec Dieu et les gens",young:"Chaque jour est une nouvelle opportunité pour le bien ! Ne gaspille pas ton temps et fais chaque jour quelque chose de beau 💀"}
  },
  {
    id:18, emoji:'🤲',
    ar:{title:'خطبة الأخوّة',desc:'الأخوّة في الإسلام رابطة أقوى من رابطة الدم والنسب. يخطب الغزالي عن الأخوّة الإسلامية التي تجمع بين المسلمين بصرف النظر عن أعراقهم وألوانهم وجنسياتهم. إنما المؤمنون إخوة — هذه آية محكمة تؤسس لمجتمع متماسك يقوم على المحبة والتعاون والتكافل. الأخوّة تعني أن تحب لأخيك ما تحب لنفسك وأن تنصره ظالماً أو مظلوماً — نصره ظالماً بردعه عن الظلم. يحذر الغزالي من الحسد والغيبة والنميمة والبغضاء لأنها سموم تقتل الأخوّة وتمزق المجتمع.',verse:'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ',verseRef:'الحجرات ١٠',hadith:'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه — متفق عليه',action:'تواصل مع أخ أو صديق لم تتحدث معه منذ فترة وأصلح بين متخاصمين إن استطعت',young:'كل المسلمين إخوة! أحب أصدقاءك وكن لطيفاً معهم وتصالح مع من خاصمت 🤲'},
    en:{title:'Sermon on Brotherhood',desc:'Brotherhood in Islam is a bond stronger than blood and lineage. Ghazali preaches about Islamic brotherhood that unites Muslims regardless of their races, colors, and nationalities. "The believers are but brothers" — this definitive verse establishes a cohesive society built on love, cooperation, and solidarity. Brotherhood means loving for your brother what you love for yourself and helping him whether he is oppressing or being oppressed — helping the oppressor by stopping them from oppressing. Ghazali warns against envy, backbiting, gossip, and hatred because they are poisons that kill brotherhood and tear apart society.',verse:'The believers are but brothers, so make reconciliation between your brothers and fear Allah that you may receive mercy',verseRef:'Al-Hujurat 10',hadith:'None of you truly believes until he loves for his brother what he loves for himself — Agreed upon',action:'Reconnect with a brother or friend you have not spoken to in a while and reconcile between those in conflict if you can',young:'All Muslims are brothers! Love your friends and be kind to them and make peace with those you quarreled with 🤲'},
    fr:{title:'Sermon sur la Fraternité',desc:"La fraternité en Islam est un lien plus fort que le sang et la lignée. Ghazali prêche sur la fraternité islamique qui unit les musulmans indépendamment de leurs races, couleurs et nationalités. « Les croyants ne sont que des frères » — ce verset définitif établit une société cohésive bâtie sur l'amour, la coopération et la solidarité. La fraternité signifie aimer pour son frère ce qu'on aime pour soi-même et l'aider qu'il soit oppresseur ou opprimé — aider l'oppresseur en l'empêchant d'opprimer. Ghazali met en garde contre l'envie, la médisance et la haine car ce sont des poisons qui tuent la fraternité et déchirent la société.",verse:'Les croyants ne sont que des frères. Établissez la réconciliation entre vos frères et craignez Allah afin de recevoir miséricorde',verseRef:'Al-Hujurat 10',hadith:'Aucun d\'entre vous ne croit véritablement tant qu\'il n\'aime pour son frère ce qu\'il aime pour lui-même — Unanimement reconnu',action:"Reconnectez-vous avec un frère ou ami perdu de vue et réconciliez ceux qui sont en conflit",young:"Tous les musulmans sont frères ! Aime tes amis et sois gentil et fais la paix avec ceux avec qui tu t'es disputé 🤲"}
  },
  {
    id:19, emoji:'📖',
    ar:{title:'خطبة هداية القرآن',desc:'القرآن الكريم ليس مجرد كتاب يُتلى بل هو منهج حياة شامل يهدي الإنسان في كل شؤونه. يخطب الغزالي عن القرآن بوصفه نوراً يضيء دروب الحياة المظلمة وشفاءً لأمراض القلوب والنفوس. يؤكد أن القرآن جاء ليُغيّر واقع الناس ويبني حضارة ويهدي البشرية جمعاء. ينتقد من يقصرون القرآن على التلاوة والتجويد دون فهم وتدبر وتطبيق. يقول الغزالي: "نحن نحتاج إلى جيل يعيش بالقرآن لا جيل يعيش على القرآن." يطالب بتعليم القرآن في المدارس تعليماً يربط بين النص وواقع الحياة. يرى أن القرآن فيه حلول لكل مشاكل العصر إذا أحسنّا فهمه وتطبيقه.',verse:'إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا',verseRef:'الإسراء ٩',hadith:'خيركم من تعلم القرآن وعلمه — رواه البخاري',action:'اقرأ صفحة من القرآن اليوم مع تفسيرها واسأل نفسك: كيف أطبق هذه الآيات في حياتي؟',young:'القرآن نور يضيء حياتك! اقرأ كل يوم آية وحاول تفهمها وتعمل بها 📖'},
    en:{title:'Sermon on the Quran\'s Guidance',desc:'The Holy Quran is not merely a book to be recited but a comprehensive way of life that guides humans in all their affairs. Ghazali preaches about the Quran as a light illuminating the dark paths of life and a cure for the diseases of hearts and souls. He affirms that the Quran came to change people\'s reality, build civilization, and guide all of humanity. He criticizes those who limit the Quran to recitation and Tajweed without understanding, reflection, and application. Ghazali says: "We need a generation that lives by the Quran, not a generation that lives off the Quran." He calls for teaching the Quran in schools in a way that connects the text to the reality of life. He sees that the Quran contains solutions to all modern problems if we properly understand and apply it.',verse:'Indeed, this Quran guides to that which is most suitable and gives good tidings to the believers who do righteous deeds that they will have a great reward',verseRef:'Al-Isra 9',hadith:'The best of you is the one who learns the Quran and teaches it — Bukhari',action:'Read a page of the Quran today with its explanation and ask yourself: how can I apply these verses in my life?',young:'The Quran is a light that illuminates your life! Read a verse every day, understand it and act on it 📖'},
    fr:{title:'Sermon sur la Guidance du Coran',desc:"Le Saint Coran n'est pas simplement un livre à réciter mais un mode de vie complet qui guide l'humain dans toutes ses affaires. Ghazali prêche sur le Coran comme une lumière éclairant les chemins sombres de la vie et un remède pour les maladies des coeurs et des âmes. Il affirme que le Coran est venu pour changer la réalité des gens, bâtir une civilisation et guider toute l'humanité. Il critique ceux qui limitent le Coran à la récitation et au Tajweed sans compréhension, réflexion et application. Ghazali dit : « Nous avons besoin d'une génération qui vit par le Coran, pas d'une génération qui vit du Coran. » Il appelle à enseigner le Coran dans les écoles d'une manière qui relie le texte à la réalité de la vie. Il voit que le Coran contient des solutions à tous les problèmes modernes si nous le comprenons et l'appliquons correctement.",verse:'Certes, ce Coran guide vers ce qui est le plus droit et annonce aux croyants qui font de bonnes oeuvres qu\'ils auront une grande récompense',verseRef:'Al-Isra 9',hadith:'Le meilleur d\'entre vous est celui qui apprend le Coran et l\'enseigne — Bukhari',action:"Lisez une page du Coran aujourd'hui avec son explication et demandez-vous : comment appliquer ces versets dans ma vie ?",young:"Le Coran est une lumière qui éclaire ta vie ! Lis un verset chaque jour, comprends-le et agis en conséquence 📖"}
  },
  {
    id:20, emoji:'⚖️',
    ar:{title:'خطبة الاعتدال',desc:'الاعتدال منهج الإسلام وسمة هذه الأمة. يخطب الغزالي عن الوسطية والاعتدال في مواجهة التطرف من كل الأطراف — سواء تطرف الغلو في الدين أو تطرف التفلت منه. الإسلام دين وسط لا إفراط فيه ولا تفريط. المسلم المعتدل يجمع بين الدين والدنيا والروح والجسد والعقل والنقل. يحذر من الغلو الذي يشوّه صورة الإسلام ومن التفريط الذي يضيّع هويته. يقول الغزالي: "التطرف داء قاتل سواء كان تطرف الجمود أو تطرف الانحلال — وعلاجه هو الوسطية التي أمر بها القرآن." يدعو إلى فهم الإسلام فهماً متوازناً يحافظ على الثوابت ويتعامل مع المتغيرات بحكمة ومرونة.',verse:'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ',verseRef:'البقرة ١٤٣',hadith:'إن هذا الدين متين فأوغلوا فيه برفق — رواه أحمد',action:'كن معتدلاً في كل شيء اليوم: في طعامك وعملك وعبادتك — لا إفراط ولا تفريط',young:'كن معتدلاً في كل شيء! لا تبالغ ولا تقصّر — الوسطية هي الطريق الأفضل ⚖️'},
    en:{title:'Sermon on Moderation',desc:'Moderation is the methodology of Islam and the characteristic of this nation. Ghazali preaches about centrism and moderation against extremism from all sides — whether the extremism of excessiveness in religion or the extremism of abandoning it. Islam is a middle religion with neither excess nor negligence. The moderate Muslim combines religion and worldly life, spirit and body, reason and revelation. He warns against extremism that distorts the image of Islam and against negligence that loses its identity. Ghazali says: "Extremism is a deadly disease whether it is the extremism of rigidity or the extremism of dissolution — and its cure is the moderation commanded by the Quran." He calls for a balanced understanding of Islam that preserves fundamentals and deals with changing circumstances wisely and flexibly.',verse:'And thus We have made you a moderate nation that you will be witnesses over the people',verseRef:'Al-Baqarah 143',hadith:'This religion is strong, so engage with it gently — Ahmad',action:'Be moderate in everything today: in your food, work, and worship — neither excess nor negligence',young:'Be moderate in everything! Do not exaggerate or fall short — moderation is the best path ⚖️'},
    fr:{title:'Sermon sur la Modération',desc:"La modération est la méthodologie de l'Islam et la caractéristique de cette nation. Ghazali prêche sur le centrisme et la modération face à l'extrémisme de tous côtés — que ce soit l'extrémisme de l'excès religieux ou celui de l'abandon de la religion. L'Islam est une religion du juste milieu, sans excès ni négligence. Le musulman modéré combine religion et vie mondaine, esprit et corps, raison et révélation. Il met en garde contre l'extrémisme qui déforme l'image de l'Islam et contre la négligence qui perd son identité. Ghazali dit : « L'extrémisme est une maladie mortelle qu'il soit de rigidité ou de dissolution — et son remède est la modération ordonnée par le Coran. » Il appelle à une compréhension équilibrée de l'Islam qui préserve les fondamentaux et traite les circonstances changeantes avec sagesse et flexibilité.",verse:'Et ainsi Nous avons fait de vous une communauté du juste milieu afin que vous soyez témoins sur les gens',verseRef:'Al-Baqarah 143',hadith:'Cette religion est forte, alors engagez-vous-y doucement — Ahmad',action:"Soyez modéré en tout aujourd'hui : nourriture, travail et adoration — ni excès ni négligence",young:"Sois modéré en tout ! N'exagère pas et ne néglige pas — la modération est le meilleur chemin ⚖️"}
  }
];

// ═══════════════ QUIZ DATA (overridable via data.js) ═══════════════
const QUIZ = window.BOOK_QUIZ || [
  {
    ar:{q:'أكمل الحديث: "إنما الأعمال بـ..."',opts:['الصبر','النيات','النتائج','الأقوال'],correct:1,hint:'هذا أول حديث في صحيح البخاري',quran:'البينة ٥'},
    en:{q:'Complete the hadith: "Actions are but by..."',opts:['Patience','Intentions','Results','Words'],correct:1,hint:'This is the first hadith in Sahih Bukhari',quran:'Al-Bayyinah 5'},
    fr:{q:'Complétez le hadith : « Les actes ne valent que par les... »',opts:['La patience','Les intentions','Les résultats','Les paroles'],correct:1,hint:'C\'est le premier hadith dans le Sahih Bukhari',quran:'Al-Bayyinah 5'}
  },
  {
    ar:{q:'ما الآية التي تدعو المسلمين إلى الوحدة وعدم التفرق؟',opts:['آل عمران ١٠٣','البقرة ١٨٣','النساء ١٣٥','الحجرات ١٠'],correct:0,hint:'فيها ذكر حبل الله',quran:'آل عمران ١٠٣'},
    en:{q:'Which verse calls Muslims to unity and not to be divided?',opts:['Al Imran 103','Al-Baqarah 183','An-Nisa 135','Al-Hujurat 10'],correct:0,hint:'It mentions the rope of Allah',quran:'Al Imran 103'},
    fr:{q:'Quel verset appelle les musulmans à l\'unité ?',opts:['Al Imran 103','Al-Baqarah 183','An-Nisa 135','Al-Hujurat 10'],correct:0,hint:'Il mentionne le câble d\'Allah',quran:'Al Imran 103'}
  },
  {
    ar:{q:'من قال: "إنما بُعثت لأتمم مكارم الأخلاق"؟',opts:['الشيخ الغزالي','عمر بن الخطاب','النبي ﷺ','أبو بكر الصديق'],correct:2,hint:'هذا حديث نبوي شريف عن رسالة الإسلام',quran:'الأحزاب ٢١'},
    en:{q:'Who said: "I was only sent to perfect noble character"?',opts:['Sheikh al-Ghazali','Umar ibn al-Khattab','The Prophet (PBUH)','Abu Bakr'],correct:2,hint:'This is a prophetic hadith about the message of Islam',quran:'Al-Ahzab 21'},
    fr:{q:'Qui a dit : « Je n\'ai été envoyé que pour parfaire les nobles caractères » ?',opts:['Sheikh al-Ghazali','Umar ibn al-Khattab','Le Prophète (PSL)','Abu Bakr'],correct:2,hint:'C\'est un hadith prophétique sur le message de l\'Islam',quran:'Al-Ahzab 21'}
  },
  {
    ar:{q:'أكمل الآية: "كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ ..."',opts:['الباطل','المنكر','الشر','الفساد'],correct:1,hint:'هذه الكلمة ضد المعروف',quran:'آل عمران ١١٠'},
    en:{q:'Complete the verse: "You are the best nation... commanding good and forbidding..."',opts:['Falsehood','Evil','Harm','Corruption'],correct:1,hint:'This word is the opposite of "good"',quran:'Al Imran 110'},
    fr:{q:'Complétez le verset : « Vous êtes la meilleure nation... vous ordonnez le bien et interdisez le... »',opts:['Le mensonge','Le mal','Le tort','La corruption'],correct:1,hint:'Ce mot est l\'opposé du « bien »',quran:'Al Imran 110'}
  },
  {
    ar:{q:'أكمل الحديث: "كلكم راع وكلكم مسؤول عن ..."',opts:['أمته','رعيته','أسرته','قبيلته'],correct:1,hint:'هذه الكلمة تعني من هم تحت رعايتك',quran:'متفق عليه'},
    en:{q:'Complete the hadith: "Each of you is a shepherd and each is responsible for their..."',opts:['Nation','Flock','Family','Tribe'],correct:1,hint:'This word means those under your care',quran:'Agreed upon'},
    fr:{q:'Complétez le hadith : « Chacun de vous est un berger et chacun est responsable de son... »',opts:['Nation','Troupeau','Famille','Tribu'],correct:1,hint:'Ce mot signifie ceux sous votre responsabilité',quran:'Unanimement reconnu'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالعدل حتى على النفس؟',opts:['النساء ١٣٥','البقرة ١٨٣','آل عمران ١٠٣','المائدة ٨'],correct:0,hint:'تبدأ بـ"يا أيها الذين آمنوا كونوا قوامين بالقسط"',quran:'النساء ١٣٥'},
    en:{q:'Which verse commands justice even against oneself?',opts:['An-Nisa 135','Al-Baqarah 183','Al Imran 103','Al-Maidah 8'],correct:0,hint:'It starts with "O you who believe, be persistently standing firm in justice"',quran:'An-Nisa 135'},
    fr:{q:'Quel verset ordonne la justice même contre soi-même ?',opts:['An-Nisa 135','Al-Baqarah 183','Al Imran 103','Al-Maidah 8'],correct:0,hint:'Il commence par « Ô vous qui croyez, soyez fermement attachés à la justice »',quran:'An-Nisa 135'}
  },
  {
    ar:{q:'ما الحديث الذي يحث على معاملة النساء بالخير؟',opts:['خيركم خيركم لأهله','استوصوا بالنساء خيراً','الراحمون يرحمهم الرحمن','كلكم راع'],correct:1,hint:'هذا الحديث قاله النبي ﷺ في خطبة الوداع',quran:'متفق عليه'},
    en:{q:'Which hadith urges good treatment of women?',opts:['The best of you is the best to his family','Treat women well','The merciful are shown mercy','Each of you is a shepherd'],correct:1,hint:'The Prophet said this in his farewell sermon',quran:'Agreed upon'},
    fr:{q:'Quel hadith exhorte au bon traitement des femmes ?',opts:['Le meilleur est le meilleur avec sa famille','Traitez les femmes avec bonté','Les miséricordieux reçoivent miséricorde','Chacun est un berger'],correct:1,hint:'Le Prophète l\'a dit dans son sermon d\'adieu',quran:'Unanimement reconnu'}
  },
  {
    ar:{q:'في أي سورة ذُكرت قصة فتية الكهف المؤمنين؟',opts:['سورة مريم','سورة الكهف','سورة البقرة','سورة يوسف'],correct:1,hint:'السورة سميت باسم المكان الذي لجأ إليه الفتية',quran:'الكهف ١٣'},
    en:{q:'In which surah is the story of the believing youth of the cave mentioned?',opts:['Surah Maryam','Surah Al-Kahf','Surah Al-Baqarah','Surah Yusuf'],correct:1,hint:'The surah is named after the place where the youth sought refuge',quran:'Al-Kahf 13'},
    fr:{q:'Dans quelle sourate est mentionnée l\'histoire des jeunes croyants de la caverne ?',opts:['Sourate Maryam','Sourate Al-Kahf','Sourate Al-Baqarah','Sourate Yusuf'],correct:1,hint:'La sourate porte le nom du lieu où les jeunes se sont réfugiés',quran:'Al-Kahf 13'}
  },
  {
    ar:{q:'أكمل الآية: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَى قُلُوبٍ ..."',opts:['غفلتها','ظلمتها','أقفالها','قسوتها'],correct:2,hint:'هذه الآية في سورة محمد تحث على تدبر القرآن',quran:'محمد ٢٤'},
    en:{q:'Complete the verse: "Do they not reflect upon the Quran, or are there ... upon their hearts?"',opts:['Negligence','Darkness','Locks','Hardness'],correct:2,hint:'This verse in Surah Muhammad urges reflection on the Quran',quran:'Muhammad 24'},
    fr:{q:'Complétez le verset : « Ne méditent-ils pas le Coran, ou y a-t-il des ... sur leurs coeurs ? »',opts:['Négligence','Ténèbres','Verrous','Dureté'],correct:2,hint:'Ce verset dans la Sourate Muhammad exhorte à la réflexion',quran:'Muhammad 24'}
  },
  {
    ar:{q:'أكمل الآية: "فَإِنَّ مَعَ الْعُسْرِ ..."',opts:['فرجاً','خيراً','يسراً','رحمة'],correct:2,hint:'تكررت هذه الآية مرتين في سورة الشرح',quran:'الشرح ٥'},
    en:{q:'Complete the verse: "Indeed, with hardship comes..."',opts:['Relief','Goodness','Ease','Mercy'],correct:2,hint:'This verse is repeated twice in Surah Ash-Sharh',quran:'Ash-Sharh 5'},
    fr:{q:'Complétez le verset : « Certes, avec la difficulté vient... »',opts:['Le soulagement','Le bien','La facilité','La miséricorde'],correct:2,hint:'Ce verset est répété deux fois dans la Sourate Ash-Sharh',quran:'Ash-Sharh 5'}
  },
  {
    ar:{q:'أكمل الآية: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ ..."',opts:['عذاب الله','رحمة الله','نعمة الله','قدرة الله'],correct:1,hint:'هذه الآية عن التوبة والرحمة الإلهية',quran:'الزمر ٥٣'},
    en:{q:'Complete: "Say: O My servants who have transgressed, do not despair of the..."',opts:['punishment of Allah','mercy of Allah','blessing of Allah','power of Allah'],correct:1,hint:'This verse is about repentance and divine mercy',quran:'Az-Zumar 53'},
    fr:{q:'Complétez : « Dis : Ô Mes serviteurs qui avez commis des excès, ne désespérez pas de la... »',opts:['punition d\'Allah','miséricorde d\'Allah','bénédiction d\'Allah','puissance d\'Allah'],correct:1,hint:'Ce verset porte sur le repentir et la miséricorde divine',quran:'Az-Zumar 53'}
  },
  {
    ar:{q:'ما الحديث الذي يحث على ذكر الموت؟',opts:['أكثروا ذكر هاذم اللذات','كلكم راع','إنما الأعمال بالنيات','التائب من الذنب كمن لا ذنب له'],correct:0,hint:'هاذم اللذات هو الموت',quran:'الترمذي'},
    en:{q:'Which hadith urges remembering death?',opts:['Frequently remember the destroyer of pleasures','Each of you is a shepherd','Actions are by intentions','The repentant is like one without sin'],correct:0,hint:'The destroyer of pleasures refers to death',quran:'Tirmidhi'},
    fr:{q:'Quel hadith exhorte à se souvenir de la mort ?',opts:['Rappelez-vous souvent le destructeur des plaisirs','Chacun est un berger','Les actes ne valent que par les intentions','Le repentant est comme celui sans péché'],correct:0,hint:'Le destructeur des plaisirs fait référence à la mort',quran:'Tirmidhi'}
  },
  {
    ar:{q:'أكمل الآية: "إِنَّمَا الْمُؤْمِنُونَ ..."',opts:['أصدقاء','إخوة','جيران','أعوان'],correct:1,hint:'هذه الآية تؤسس للأخوّة الإسلامية في سورة الحجرات',quran:'الحجرات ١٠'},
    en:{q:'Complete: "The believers are but..."',opts:['Friends','Brothers','Neighbors','Helpers'],correct:1,hint:'This verse establishes Islamic brotherhood in Surah Al-Hujurat',quran:'Al-Hujurat 10'},
    fr:{q:'Complétez : « Les croyants ne sont que des... »',opts:['Amis','Frères','Voisins','Auxiliaires'],correct:1,hint:'Ce verset établit la fraternité islamique dans la Sourate Al-Hujurat',quran:'Al-Hujurat 10'}
  },
  {
    ar:{q:'ما الآية التي تصف الأمة الإسلامية بالوسطية؟',opts:['البقرة ١٤٣','آل عمران ١١٠','النساء ١٣٥','الحجرات ١٣'],correct:0,hint:'هذه الآية في سورة البقرة وفيها وصف الأمة بالوسط',quran:'البقرة ١٤٣'},
    en:{q:'Which verse describes the Muslim nation as moderate?',opts:['Al-Baqarah 143','Al Imran 110','An-Nisa 135','Al-Hujurat 13'],correct:0,hint:'This verse in Surah Al-Baqarah describes the nation as moderate',quran:'Al-Baqarah 143'},
    fr:{q:'Quel verset décrit la nation musulmane comme modérée ?',opts:['Al-Baqarah 143','Al Imran 110','An-Nisa 135','Al-Hujurat 13'],correct:0,hint:'Ce verset dans la Sourate Al-Baqarah décrit la nation comme modérée',quran:'Al-Baqarah 143'}
  },
  {
    ar:{q:'ما الحديث الذي يحث على الرفق بالدين؟',opts:['إن هذا الدين متين فأوغلوا فيه برفق','إنما الأعمال بالنيات','خيركم خيركم لأهله','لا يؤمن أحدكم حتى يحب لأخيه'],correct:0,hint:'هذا الحديث عن التعامل بلطف مع الدين',quran:'أحمد'},
    en:{q:'Which hadith urges gentleness in religion?',opts:['This religion is strong, so engage with it gently','Actions are by intentions','The best is best to family','None believes until he loves for his brother'],correct:0,hint:'This hadith is about engaging gently with religion',quran:'Ahmad'},
    fr:{q:'Quel hadith exhorte à la douceur dans la religion ?',opts:['Cette religion est forte, engagez-vous-y doucement','Les actes ne valent que par les intentions','Le meilleur est le meilleur envers sa famille','Aucun ne croit jusqu\'à ce qu\'il aime pour son frère'],correct:0,hint:'Ce hadith parle d\'engager doucement avec la religion',quran:'Ahmad'}
  }
];

// ═══════════════ DUAS DATA (overridable via data.js) ═══════════════
const DUAS = window.BOOK_DUAS || [
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'رواه مسلم'}, en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character — Muslim'}, fr:{label:'Dua pour le Bon Caractère',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'Ô Allah, guide-moi vers le meilleur caractère — Muslim'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'}, en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'}, fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'}, en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him — At-Tawbah 129'}, fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'}, en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'}, fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, déverse sur nous la patience — Al-Baqarah 250'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'}, en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful — An-Naml 19'}, fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier — An-Naml 19'} },
  { ar:{label:'دعاء العفو',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'}, en:{label:'Dua for Forgiveness',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving and love forgiveness, so forgive me — Tirmidhi'}, fr:{label:'Dua pour le Pardon',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'Ô Allah, Tu es Pardonneur, pardonne-moi — Tirmidhi'} },
  { ar:{label:'دعاء الثبات على الحق',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'رواه الترمذي'}, en:{label:'Dua for Steadfastness',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart firm upon Your religion — Tirmidhi'}, fr:{label:'Dua pour la Constance',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'Ô Celui qui retourne les coeurs, affermis mon coeur sur Ta religion — Tirmidhi'} },
  { ar:{label:'دعاء حسن الخاتمة',text:'اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'دعاء مأثور'}, en:{label:'Dua for a Good Ending',text:'اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'O Allah, make the best of my life its end, the best of my deeds their conclusion, and the best of my days the day I meet You'}, fr:{label:'Dua pour une Bonne Fin',text:'اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'Ô Allah, fais que le meilleur de ma vie soit sa fin et le meilleur de mes jours le jour où je Te rencontre'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'khutab-xp'; const BADGES_KEY = 'khutab-badges'; const READ_KEY = 'khutab-read'; const STREAK_KEY = 'khutab-streak'; const MODE_KEY = 'khutab-mode'; const QUIZ_BEST_KEY = 'khutab-quiz-best';
const BADGE_DEFS = [ { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' }, { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' }, { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' }, { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' }, { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' } ];
function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l)
  );
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  const searchHTML = `<div class="search-bar">
    <span class="search-icon">🔍</span>
    <input class="search-input" id="cardsSearch"
      placeholder="${t.searchPlaceholder}"
      oninput="filterCards(this.value)">
  </div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})">
            <span class="share-icon">📤</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc')
      ? card.querySelector('.trait-desc').textContent.toLowerCase()
      : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) {
    navigator.share({ title: d.title, text });
  } else {
    navigator.clipboard.writeText(text).then(() =>
      showToast(lang==='ar'?'تم النسخ':'Copied!')
    );
  }
}

// ═══════════════ QUIZ ENGINE ═══════════════
let quizState = {
  current: 0,
  score: 0,
  answers: [],
  lifelines: { fifty: true, hint: true, quran: true },
  active: false
};

function renderQuiz() {
  quizState = {
    current: 0,
    score: 0,
    answers: [],
    lifelines: { fifty: true, hint: true, quran: true },
    active: true
  };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width:${num/total*100}%"></div>
    </div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) =>
          `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`
        ).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}"
          onclick="useFiftyFifty()"
          ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}"
          onclick="useHint()"
          ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}"
          onclick="useQuranRef()"
          ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => {
    const el = document.getElementById('qopt-'+i);
    if(el) { el.style.visibility='hidden'; el.disabled=true; }
  });
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) {
    emoji = '🏆';
    title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!';
  } else if (pct >= 50) {
    emoji = '📖';
    title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!';
  } else {
    emoji = '🌱';
    title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!';
  }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);
  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar">
          <div class="xp-bar-fill" style="width:${progressPct}%"></div>
        </div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card">
        <span class="stat-num">${readCards.length}</span>
        <span class="stat-label">${lang==='ar'?'خطبة مقروءة':lang==='fr'?'Sermons lus':'Sermons Read'}</span>
        <span class="stat-total">/ ${CARDS.length}</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">${bestQuiz}%</span>
        <span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span>
      </div>
      <div class="stat-card">
        <span class="stat-num">${earned.length}</span>
        <span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span>
        <span class="stat-total">/ ${BADGE_DEFS.length}</span>
      </div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}">
          <span class="badge-emoji">${b.emoji}</span>
          <span class="badge-name">${b[lang]}</span>
          <span class="badge-xp">${b.xp} XP</span>
        </div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() { const about = window.BOOK_ABOUT || { ar: { disclaimerTitle: '⚠️ تنبيه مهم', disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.', authorName: 'الشيخ محمد الغزالي', authorDates: '١٩١٧ — ١٩٩٦', authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً في الفكر الإسلامي والدعوة. حاصل على جائزة الملك فيصل العالمية.', bookTitle: 'عن الكتاب', bookDesc: '«خطب الغزالي في شؤون الدين والحياة» كتاب يجمع خطب الشيخ محمد الغزالي في مواضيع متنوعة تشمل الإيمان والعدل والأسرة والعلم والأخلاق والوحدة والشباب وحقوق المرأة. خطب عملية تربط بين الدين والحياة.', sourcesTitle: 'المصادر', sources: ['كتاب "خطب الغزالي" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأحمد'], contact: 'تواصل: abdelhak.bourdim@gmail.com' }, en: { disclaimerTitle: '⚠️ Important Notice', disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources.', authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996', authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. King Faisal International Prize laureate.', bookTitle: 'About the Book', bookDesc: '"Ghazali\'s Sermons on Faith and Life" is a collection of Sheikh al-Ghazali\'s sermons on diverse topics including faith, justice, family, knowledge, ethics, unity, youth, and women\'s rights.', sourcesTitle: 'Sources', sources: ['"Ghazali\'s Sermons" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Ahmad'], contact: 'Contact: abdelhak.bourdim@gmail.com' }, fr: { disclaimerTitle: '⚠️ Avis Important', disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996', authorBio: 'Savant et penseur islamique égyptien, surnommé "Le Littéraire de la Prédication". Auteur de plus de 94 livres. Lauréat du Prix Roi Faysal.', bookTitle: 'À Propos du Livre', bookDesc: '« Les Sermons de Ghazali sur la Foi et la Vie » est un recueil de sermons sur des sujets variés incluant la foi, la justice, la famille, le savoir et les droits des femmes.', sourcesTitle: 'Sources', sources: ['"Les Sermons de Ghazali" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Ahmad'], contact: 'Contact : abdelhak.bourdim@gmail.com' } }; const a = about[lang]; (document.getElementById('aboutContainer')||{}).innerHTML= `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`; }

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() { const help = { ar: [ {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'}, {title:'📚 المصادر',body:'كتاب "خطب الغزالي" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'}, {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ خطبة، مسابقة تفاعلية، نظام نقاط وشارات.'}, {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة.'}, {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث.'}, {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/khutab-al-ghazali'}, ], en: [ {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'}, {title:'📚 Sources',body:'"Ghazali\'s Sermons" by Sheikh al-Ghazali, the Holy Quran, Prophetic Sunnah.'}, {title:'✨ Features',body:'Three languages, 3 themes, 20 sermons, interactive quiz, XP and badges.'}, {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'}, {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses and hadiths.'}, {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/khutab-al-ghazali'}, ], fr: [ {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'}, {title:'📚 Sources',body:'"Les Sermons de Ghazali", le Saint Coran, la Sunnah.'}, {title:'✨ Fonctionnalités',body:'Trois langues, 3 thèmes, 20 sermons, quiz interactif, système XP et badges.'}, {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifié.'}, {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets et hadiths.'}, {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/khutab-al-ghazali'}, ] }; (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join(''); }

// ═══════════════ RENDER: DUAS & TICKER ═══════════════
function renderDuas() { (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }
function renderTicker() { const tips = { ar: ['📖 اقرأ خطبة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ أكمل ٢٠ خطبة لتصبح خبيراً'], en: ['📖 Read a new sermon every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget dua','⭐ Complete all 20 sermons to become Expert'], fr: ['📖 Lisez un nouveau sermon chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas','⭐ Complétez les 20 sermons pour devenir Expert'] }; const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText'); ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join(''); ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`; }

// ═══════════════ SPLASH, TABS, SCROLL, KEYBOARD, UTILITIES ═══════════════
let splashTimer;

function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}

function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) {
    splash.classList.add('hidden');
    setTimeout(() => splash.remove(), 600);
  }
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchTab(tab.dataset.tab);
    });
  });
}

function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el =>
    window._scrollObserver.observe(el)
  );
}

function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c =>
        c.style.display !== 'none'
      );
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) {
        cards[currentCardIdx].classList.remove('open');
      }
      const dir = document.documentElement.dir === 'rtl'
        ? (e.key==='ArrowRight'?-1:1)
        : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) {
    card.classList.toggle('open');
    playSound('click');
  }
}

function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}

function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) {
    m.textContent = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2500);
  }
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') {
      osc.frequency.value = 800;
      osc.type = 'sine';
      gain.gain.value = 0.04;
    } else if (type==='success') {
      osc.frequency.value = 523;
      osc.type = 'sine';
      gain.gain.value = 0.06;
    } else if (type==='theme') {
      osc.frequency.value = 440;
      osc.type = 'triangle';
      gain.gain.value = 0.05;
    }
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }
  draw();
}

function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) {
      dailyTitle.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      setTimeout(() => dailyTitle.classList.add('tw-done'), 1500);
    }
  }
  setTimeout(typeChar, 500);
}

function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => {
      const p = document.getElementById('panel-'+t);
      return p && p.classList.contains('active');
    });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1;
    else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
