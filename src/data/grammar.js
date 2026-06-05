export const grammarRules = [
  {
    id: 1,
    title: "La négation (ma...sh)",
    emoji: "🚫",
    level: "Débutant",
    explanation:
      "En darija, la négation se forme en encadrant le verbe avec le préfixe « ma » et le suffixe « sh ». C'est l'équivalent du « ne...pas » français. Pour les adjectifs ou les noms, on peut aussi utiliser « mashi » (pas / ce n'est pas).",
    examples: [
      {
        darija: "ما مشيتش للسوق",
        romanization: "Ma mshitsh l-s-souq",
        translation: "Je ne suis pas allé au marché"
      },
      {
        darija: "ما كاينش الماء",
        romanization: "Ma kaynsh l-ma",
        translation: "Il n'y a pas d'eau"
      },
      {
        darija: "ماشي مزيان",
        romanization: "Mashi mzyan",
        translation: "Ce n'est pas bien"
      }
    ],
    tip: "Astuce : avec un pronom suffixe, le « sh » reste toujours à la fin. Ex : ما عرفتوهش = je ne le connaissais pas."
  },
  {
    id: 2,
    title: "Les pronoms personnels",
    emoji: "👤",
    level: "Débutant",
    explanation:
      "Le darija possède des pronoms personnels distincts pour chaque personne. Contrairement au français, le pronom sujet est souvent omis en contexte car la conjugaison du verbe suffit à identifier la personne. Ils sont néanmoins utilisés pour l'emphase ou la clarté.",
    examples: [
      {
        darija: "أنا مغربي، نتا فرنساوي؟",
        romanization: "Ana maghribi, nta fransawi?",
        translation: "Moi je suis marocain, toi tu es français ?"
      },
      {
        darija: "هو كيخدم، هي كتقرا",
        romanization: "Hwa kay-kheddem, hiya kat-qra",
        translation: "Lui il travaille, elle elle étudie"
      },
      {
        darija: "حنا مغاربة، نتوما فين؟",
        romanization: "Hna mgharba, ntuma fin?",
        translation: "Nous sommes marocains, vous, vous êtes où ?"
      }
    ],
    tip: "Les pronoms : أنا (ana=je), نتا (nta=tu ♂), نتي (nti=tu ♀), هو (hwa=il), هي (hiya=elle), حنا (hna=nous), نتوما (ntuma=vous), هوما (huma=ils/elles)."
  },
  {
    id: 3,
    title: "Le présent (kayn / kayna)",
    emoji: "⏳",
    level: "Débutant",
    explanation:
      "Pour exprimer le présent progressif ou habituel, le darija utilise le préfixe « ka » (kont-) devant le verbe conjugué. « Kayn » (masculin) et « kayna » (féminin) signifient « il y a / existe ». Le préfixe « ta » indique une action en cours ou habituelle dans certains contextes.",
    examples: [
      {
        darija: "كنمشي للخدمة كل نهار",
        romanization: "Kanmshi l-l-khedma koll nhar",
        translation: "Je vais au travail tous les jours"
      },
      {
        darija: "كاين واحد المشكيل",
        romanization: "Kayn wahd l-moshkil",
        translation: "Il y a un problème"
      },
      {
        darija: "كاتأكل فالدار",
        romanization: "Kat-akol f-d-dar",
        translation: "Elle mange à la maison (habituellement)"
      }
    ],
    tip: "Le préfixe ka- (ou kat- pour elle/vous) se place devant la forme de base du verbe pour marquer une action habituelle ou en cours au présent."
  },
  {
    id: 4,
    title: "La possession (dyal)",
    emoji: "🔑",
    level: "Débutant",
    explanation:
      "La possession en darija s'exprime principalement avec le mot « dyal » (de / appartenant à), suivi du pronom possessif ou d'un nom. C'est l'équivalent du « de » français. Les pronoms possessifs s'attachent directement à « dyal ».",
    examples: [
      {
        darija: "هاد الطومبيل ديالي",
        romanization: "Had t-tombil dyali",
        translation: "Cette voiture est à moi"
      },
      {
        darija: "الكتاب ديال خويا",
        romanization: "L-ktab dyal khwiya",
        translation: "Le livre de mon frère"
      },
      {
        darija: "فين هو الهاتف ديالك؟",
        romanization: "Fin hwa l-hatef dyalek?",
        translation: "Où est ton téléphone ?"
      }
    ],
    tip: "Pronoms avec dyal : ديالي (dyali=mon/ma), ديالك (dyalek=ton/ta), ديالو (dyalu=son ♂), ديالها (dyalha=son ♀), ديالنا (dyalna=notre), ديالكم (dyalkum=votre), ديالهم (dyalhum=leur)."
  },
  {
    id: 5,
    title: "Les questions (wash, fin, shkun, shhal, mnin)",
    emoji: "❓",
    level: "Intermédiaire",
    explanation:
      "Le darija dispose de plusieurs mots interrogatifs. « Wash » introduit une question fermée (oui/non) ou est l'équivalent de « est-ce que ». « Fin » = où, « shkun » = qui, « shhal » = combien, « mnin » = d'où / depuis quand, « kifash » = comment, «3lash » = pourquoi.",
    examples: [
      {
        darija: "واش بغيتي تجي معي؟",
        romanization: "Wash bghiti tji m3aya?",
        translation: "Est-ce que tu veux venir avec moi ?"
      },
      {
        darija: "فين كاين الحمام؟",
        romanization: "Fin kayn l-hammam?",
        translation: "Où sont les toilettes ?"
      },
      {
        darija: "شحال ثمن هاد الحاجة؟",
        romanization: "Shhal taman had l-haja?",
        translation: "Combien coûte cette chose ?"
      }
    ],
    tip: "Pour poser une question simple avec « wash », il suffit de le placer en début de phrase et de garder la phrase déclarative : واش نتا مغربي؟ (Tu es marocain ?)."
  },
  {
    id: 6,
    title: "Le pluriel",
    emoji: "📚",
    level: "Intermédiaire",
    explanation:
      "La formation du pluriel en darija est souvent irrégulière, comme en arabe classique. Il existe des pluriels dits « brisés » (changement interne du mot) et des pluriels réguliers formés avec les suffixes « -in » (personnes masculines) ou « -at » (certains féminins). Mémoriser chaque pluriel individuellement est conseillé.",
    examples: [
      {
        darija: "ولد ← أولاد",
        romanization: "Weld ← Awlad",
        translation: "Garçon ← Garçons"
      },
      {
        darija: "دار ← ديور",
        romanization: "Dar ← Dyur",
        translation: "Maison ← Maisons"
      },
      {
        darija: "طالب ← طلبة",
        romanization: "Taleb ← Tleba",
        translation: "Étudiant ← Étudiants"
      }
    ],
    tip: "Le suffixe « -in » est fréquent pour les adjectifs et participes au pluriel : مغربي ← مغاربة / ساكن (habitant) ← ساكنين (habitants)."
  },
  {
    id: 7,
    title: "Les verbes au passé",
    emoji: "⏮️",
    level: "Intermédiaire",
    explanation:
      "Le passé en darija se forme en ajoutant des suffixes personnels à la racine verbale. La conjugaison est généralement régulière et suit un schéma assez stable. Il n'y a pas d'auxiliaire comme « avoir » ou « être » en français : le temps est indiqué par les terminaisons seules.",
    examples: [
      {
        darija: "مشيت، مشيتي، مشى، مشات",
        romanization: "Mshit, mshiti, msha, mshat",
        translation: "Je suis parti(e), tu es parti(e), il est parti, elle est partie"
      },
      {
        darija: "كليت الكسكس بالكامل",
        romanization: "Klit l-ksksu bel-kamel",
        translation: "J'ai mangé tout le couscous"
      },
      {
        darija: "شربو الأتاي مع الجيران",
        romanization: "Shrbu l-atay m3a l-jiran",
        translation: "Ils ont bu le thé avec les voisins"
      }
    ],
    tip: "Suffixes du passé : ت- (t=je), تي- (ti=tu), Ø (il), ت- (t=elle), نا- (na=nous), توا- (tu=vous), و- (u=ils/elles)."
  },
  {
    id: 8,
    title: "Les adjectifs (accord)",
    emoji: "🎨",
    level: "Avancé",
    explanation:
      "En darija, les adjectifs s'accordent en genre avec le nom qu'ils qualifient. Le féminin se forme généralement en ajoutant le suffixe « -a » à l'adjectif masculin. L'adjectif se place après le nom, contrairement au français où il peut être avant ou après.",
    examples: [
      {
        darija: "ولد كبير / بنت كبيرة",
        romanization: "Weld kbir / bent kbira",
        translation: "Un grand garçon / Une grande fille"
      },
      {
        darija: "رجل مزيان / مرأة مزيانة",
        romanization: "Rajel mzyan / mra mzyana",
        translation: "Un bon homme / Une bonne femme"
      },
      {
        darija: "الدار جديدة والسيارة قديمة",
        romanization: "D-dar jdida w s-siyara qdima",
        translation: "La maison est neuve et la voiture est vieille"
      }
    ],
    tip: "Quelques adjectifs courants avec leur féminin : كبير/كبيرة (kbir/kbira), صغير/صغيرة (sghir/sghira), جديد/جديدة (jdid/jdida), مليح/مليحة (mlih/mliha = beau/belle)."
  }
];
