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
  },
  {
    id: 9,
    title: "Le présent progressif (kay-/kat-)",
    emoji: "🔄",
    level: "Intermédiaire",
    explanation:
      "En darija, les actions présentes en cours ou habituelles utilisent le préfixe « kay- » (masculin) ou « kat- » (féminin) devant la racine verbale. Au pluriel, « kay- » devient « kay-...-u ». C'est l'équivalent de « être en train de » en français. Le préfixe « ta- » est aussi entendu dans certaines régions.",
    examples: [
      {
        darija: "كيكتب",
        romanization: "Kay-kteb",
        translation: "Il écrit / Il est en train d'écrire"
      },
      {
        darija: "كتقرأ",
        romanization: "Kat-qra",
        translation: "Elle lit / Elle étudie"
      },
      {
        darija: "كيلعبو فالدار",
        romanization: "Kay-l3ebbu f-d-dar",
        translation: "Ils jouent à la maison"
      }
    ],
    tip: "Schéma : kay- + radical verbal (masc.) / kat- + radical verbal (fém.) / kay-...-u (pluriel). Le radical supprime la voyelle initiale de l'infinitif. Ex : klam → kay-klem."
  },
  {
    id: 10,
    title: "Le futur proche (ghadi + verbe)",
    emoji: "🔮",
    level: "Intermédiaire",
    explanation:
      "Pour exprimer une action future proche en darija, on utilise « ghadi » (aller) + le verbe conjugué au présent. « Ghadi » vient de la racine « msha » (partir/aller) et fonctionne exactement comme « aller + infinitif » en français. Négation : « ma ghadi...sh n-mshy » = je ne vais pas partir.",
    examples: [
      {
        darija: "غادي نمشي غدا",
        romanization: "Ghadi nmshi ghda",
        translation: "Je vais partir demain"
      },
      {
        darija: "غادي تاكل هنا؟",
        romanization: "Ghadi takol hna?",
        translation: "Tu vas manger ici ?"
      },
      {
        darija: "ما غاديش يجي",
        romanization: "Ma ghadi-sh yji",
        translation: "Il ne va pas venir"
      }
    ],
    tip: "« Ghadi » est invariable comme marqueur de futur — il reste le même pour toutes les personnes. Il suffit de conjuguer normalement le verbe principal qui le suit."
  },
  {
    id: 11,
    title: "La négation avancée",
    emoji: "🚫",
    level: "Avancé",
    explanation:
      "Au-delà du « ma...sh » de base, le darija possède des schémas négatifs plus riches. « 3mmr...ma » = jamais, « walo » = rien, « htta wa7d/ħaja » = personne/rien (combiné avec ma), « ma bqa-sh » = ne plus. Ces formes correspondent au français « ne...jamais », « ne...rien », « ne...plus », « ne...personne ».",
    examples: [
      {
        darija: "عمرو ما كلا طاجين",
        romanization: "3mmru ma kla tajin",
        translation: "Il n'a jamais mangé de tajine"
      },
      {
        darija: "ما قال والو",
        romanization: "Ma gal walo",
        translation: "Il n'a rien dit"
      },
      {
        darija: "ما بقاش كيجي",
        romanization: "Ma bqa-sh kayji",
        translation: "Il ne vient plus"
      }
    ],
    tip: "« 3mmr + pronom + ma + verbe au passé » = jamais. « Walo » = rien du tout. « Htta wa7d » = personne. « Ma bqa-sh » = ne plus (rupture avec une habitude passée)."
  },
  {
    id: 12,
    title: "Les verbes courants — passé et présent",
    emoji: "⚡",
    level: "Intermédiaire",
    explanation:
      "Le passé en darija se forme en ajoutant des suffixes personnels directement à la racine verbale. Les suffixes clés sont : -t (je), -ti (tu masc.), -tiy (tu fém.), ø (il), -at (elle), -na (nous), -tou (vous), -u (ils/elles). Il n'y a pas de verbe auxiliaire — seul le radical + suffixe suffit.",
    examples: [
      {
        darija: "كليت واجب",
        romanization: "Klit wajib",
        translation: "J'ai tout mangé (J'ai mangé complètement)"
      },
      {
        darija: "مشات للسوق",
        romanization: "Mshat l-s-souq",
        translation: "Elle est allée au marché"
      },
      {
        darija: "شربنا أتاي مع الجيران",
        romanization: "Shrebna atay m3a l-jiran",
        translation: "Nous avons bu le thé avec les voisins"
      }
    ],
    tip: "Suffixes du passé : -t (ana/je), -ti (nta/tu), -tiy (nti/tu fém.), [ø] (hwa/il), -at (hiya/elle), -na (hna/nous), -tou (ntuma/vous), -u (huma/ils). La racine verbale se contracte souvent."
  },
  {
    id: 13,
    title: "Registre formel vs. informel",
    emoji: "🎩",
    level: "Avancé",
    explanation:
      "Le darija possède des registres formels et informels distincts. Lorsqu'on s'adresse à des aînés, des inconnus ou dans un contexte professionnel, on utilise des formules plus formelles. Au lieu de « nta » (tu, familier), on dit « hadrat-ek » ou simplement le pluriel « ntuma » comme forme de politesse. Ajouter « men fadlak/men fadlkom » (s'il vous plaît) marque le respect. Le choix du registre témoigne d'une intelligence culturelle.",
    examples: [
      {
        darija: "حضرتك كيف حالك؟",
        romanization: "Hadrat-ek, kifash ħalek?",
        translation: "Vous, comment allez-vous ? [formel]"
      },
      {
        darija: "عفاك، واش يمكن تعاونني؟",
        romanization: "3fak, wash ymken t3awenni?",
        translation: "S'il vous plaît, pouvez-vous m'aider ? [formel]"
      },
      {
        darija: "ياك مزيان سيدي",
        romanization: "Yakk mzyan, sidi?",
        translation: "Ça va bien, monsieur ? [très respectueux]"
      }
    ],
    tip: "Marqueurs formels clés : « sidi » (monsieur, respectueux), « lalla » (madame, respectueux), « 3fak/3fakom » (s'il vous plaît, formel), « hadratek » (vouvoiement). Dans les contextes professionnels, mélanger du français ajoute de la formalité."
  },
  {
    id: 14,
    title: "Les proverbes marocains",
    emoji: "📜",
    level: "Avancé",
    explanation:
      "Les proverbes marocains (l-amtal) sont un pilier de la culture darija. Ils s'emploient dans la conversation quotidienne pour transmettre une sagesse, donner un conseil ou commenter une situation. Connaître des proverbes témoigne d'une intégration culturelle profonde et impressionne les locuteurs natifs. Ils utilisent souvent la rime, la métaphore et une structure concise.",
    examples: [
      {
        darija: "اللي فات مات",
        romanization: "Li fat mat",
        translation: "Ce qui est passé est mort → Oublie le passé"
      },
      {
        darija: "الدار دار بابا والبرا برا",
        romanization: "D-dar dar baba w l-bra bra",
        translation: "La maison est la maison du père, et l'extérieur c'est l'extérieur → Rien ne vaut chez soi"
      },
      {
        darija: "اعطي الخبز لخبازه",
        romanization: "3ti l-khobz l-khhbazu",
        translation: "Donne le pain au boulanger → Fais confiance aux experts"
      }
    ],
    tip: "Autres proverbes célèbres : « L-3ql msous » (La sagesse est amère → L'expérience coûte cher), « Shi-yji-lik shi-ymshi-lak » (Ce qui vient à toi peut aussi partir → Rien n'est permanent). Utilise les proverbes avec parcimonie pour ne pas paraître prétentieux !"
  }
];
